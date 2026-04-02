declare module '@react-native-community/datetimepicker' {
  import * as React from 'react';

  export interface DateTimePickerEvent {
    type: 'set' | 'dismissed' | 'neutralButtonPressed';
    nativeEvent?: Record<string, unknown>;
  }

  export interface DateTimePickerProps {
    value: Date;
    mode?: 'date' | 'time' | 'datetime' | 'countdown';
    display?: 'default' | 'spinner' | 'calendar' | 'clock' | 'compact' | 'inline';
    minimumDate?: Date;
    maximumDate?: Date;
    onChange?: (event: DateTimePickerEvent, date?: Date) => void;
    onTouchCancel?: () => void;
  }

  const DateTimePicker: React.ComponentType<DateTimePickerProps>;
  export default DateTimePicker;
}