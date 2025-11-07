import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'


export function AccordionPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Accordion</h1>
        <p className="text-muted-foreground mt-2">
          Accordion component examples and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Example</h2>
          <div className="flex flex-col gap-4">
            <Accordion type="single" collapsible className="w-full"><AccordionItem value="item-1"><AccordionTrigger>Is it accessible?</AccordionTrigger><AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent></AccordionItem><AccordionItem value="item-2"><AccordionTrigger>Is it styled?</AccordionTrigger><AccordionContent>Yes. It comes with default styles.</AccordionContent></AccordionItem></Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
