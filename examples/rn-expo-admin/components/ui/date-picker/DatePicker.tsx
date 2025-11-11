import * as React from 'react';
import { View, Text, Pressable, Platform } from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { cn } from '@/lib/utils';

export interface DatePickerProps {
  selected?: Date;
  onChanged?: (date: Date | undefined) => void;
  minDate?: Date;
  maxDate?: Date;
  format?: string;
  placeholder?: string;
  header?: React.ReactNode;
  className?: string;
  mode?: 'single' | 'range';
}

export const DatePicker = React.forwardRef<View, DatePickerProps>(
  (
    {
      selected,
      onChanged,
      minDate,
      maxDate,
      format,
      placeholder = 'Pick a date',
      header,
      className,
      mode = 'single',
    },
    ref
  ) => {
    const [date, setDate] = React.useState<Date | undefined>(selected);
    const [show, setShow] = React.useState(false);

    const formatDate = (date: Date): string => {
      if (!format || format === 'MMM dd, yyyy') {
        return date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        });
      }
      // Simple format handling for common patterns
      return date.toLocaleDateString();
    };

    const displayText = date ? formatDate(date) : placeholder;

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
      if (Platform.OS === 'android') {
        setShow(false);
      }

      if (event.type === 'set' && selectedDate) {
        setDate(selectedDate);
        onChanged?.(selectedDate);
      } else if (event.type === 'dismissed') {
        setShow(false);
      }
    };

    const handlePress = () => {
      setShow(true);
    };

    const handleClear = () => {
      setDate(undefined);
      onChanged?.(undefined);
    };

    return (
      <View ref={ref} className={cn('w-full', className)}>
        {header && (
          <View className="mb-2">
            {typeof header === 'string' ? <Text>{header}</Text> : header}
          </View>
        )}

        <Pressable
          onPress={handlePress}
          className={cn(
            'flex-row items-center px-3 py-2.5 border border-border rounded-lg',
            'active:opacity-70'
          )}
        >
          {/* Calendar Icon */}
          <View className="mr-3">
            <Text className="text-muted-foreground text-lg">📅</Text>
          </View>

          {/* Display Text */}
          <Text
            className={cn(
              'flex-1 text-base',
              date ? 'text-foreground' : 'text-muted-foreground'
            )}
          >
            {displayText}
          </Text>

          {/* Clear Button */}
          {date && (
            <Pressable
              onPress={handleClear}
              className="ml-2 active:opacity-70"
              hitSlop={8}
            >
              <Text className="text-muted-foreground text-lg">✕</Text>
            </Pressable>
          )}
        </Pressable>

        {/* Date Picker Modal */}
        {show && (
          <DateTimePicker
            value={date || new Date()}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onChange}
            minimumDate={minDate}
            maximumDate={maxDate}
            {...(Platform.OS === 'ios' && {
              onTouchCancel: () => setShow(false),
            })}
          />
        )}
      </View>
    );
  }
);

DatePicker.displayName = 'DatePicker';

export interface DateRangePickerProps {
  selected?: { start: Date; end: Date };
  onChanged?: (range: { start: Date; end: Date } | undefined) => void;
  minDate?: Date;
  maxDate?: Date;
  format?: string;
  placeholder?: string;
  header?: React.ReactNode;
  className?: string;
}

export const DateRangePicker = React.forwardRef<View, DateRangePickerProps>(
  (
    {
      selected,
      onChanged,
      minDate,
      maxDate,
      format,
      placeholder = 'Pick a date range',
      header,
      className,
    },
    ref
  ) => {
    const [range, setRange] = React.useState<
      { start: Date; end: Date } | undefined
    >(selected);
    const [show, setShow] = React.useState(false);
    const [selectingStart, setSelectingStart] = React.useState(true);

    const formatDate = (date: Date): string => {
      if (!format || format === 'MMM dd, yyyy') {
        return date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        });
      }
      return date.toLocaleDateString();
    };

    const displayText = range
      ? `${formatDate(range.start)} - ${formatDate(range.end)}`
      : placeholder;

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
      if (Platform.OS === 'android') {
        setShow(false);
      }

      if (event.type === 'set' && selectedDate) {
        if (selectingStart) {
          // Selected start date
          setRange({ start: selectedDate, end: selectedDate });
          setSelectingStart(false);
          // Keep picker open for end date selection on iOS
          if (Platform.OS === 'ios') {
            setShow(true);
          } else {
            // On Android, show picker again
            setTimeout(() => setShow(true), 100);
          }
        } else {
          // Selected end date
          if (range) {
            const newRange = {
              start: range.start,
              end: selectedDate < range.start ? range.start : selectedDate,
            };
            setRange(newRange);
            onChanged?.(newRange);
          }
          setShow(false);
          setSelectingStart(true);
        }
      } else if (event.type === 'dismissed') {
        setShow(false);
        setSelectingStart(true);
      }
    };

    const handlePress = () => {
      setSelectingStart(true);
      setShow(true);
    };

    const handleClear = () => {
      setRange(undefined);
      onChanged?.(undefined);
      setSelectingStart(true);
    };

    return (
      <View ref={ref} className={cn('w-full', className)}>
        {header && (
          <View className="mb-2">
            {typeof header === 'string' ? <Text>{header}</Text> : header}
          </View>
        )}

        <Pressable
          onPress={handlePress}
          className={cn(
            'flex-row items-center px-3 py-2.5 border border-border rounded-lg',
            'active:opacity-70'
          )}
        >
          {/* Calendar Icon */}
          <View className="mr-3">
            <Text className="text-muted-foreground text-lg">📅</Text>
          </View>

          {/* Display Text */}
          <Text
            className={cn(
              'flex-1 text-base',
              range ? 'text-foreground' : 'text-muted-foreground'
            )}
          >
            {displayText}
          </Text>

          {/* Clear Button */}
          {range && (
            <Pressable
              onPress={handleClear}
              className="ml-2 active:opacity-70"
              hitSlop={8}
            >
              <Text className="text-muted-foreground text-lg">✕</Text>
            </Pressable>
          )}
        </Pressable>

        {/* Date Picker Modal */}
        {show && (
          <>
            {Platform.OS === 'ios' && (
              <View className="mt-2 p-2 bg-muted rounded-lg">
                <Text className="text-sm text-muted-foreground text-center mb-2">
                  {selectingStart
                    ? 'Select start date'
                    : 'Select end date'}
                </Text>
              </View>
            )}
            <DateTimePicker
              value={
                selectingStart
                  ? range?.start || new Date()
                  : range?.end || range?.start || new Date()
              }
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={onChange}
              minimumDate={selectingStart ? minDate : range?.start}
              maximumDate={maxDate}
              {...(Platform.OS === 'ios' && {
                onTouchCancel: () => {
                  setShow(false);
                  setSelectingStart(true);
                },
              })}
            />
          </>
        )}
      </View>
    );
  }
);

DateRangePicker.displayName = 'DateRangePicker';

// Static method for creating range picker
DatePicker.range = DateRangePicker;

export { DateRangePicker as DatePickerRange };
