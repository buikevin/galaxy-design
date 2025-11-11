declare module 'splitpanes' {
  import { DefineComponent } from 'vue'

  export const Splitpanes: DefineComponent<{
    horizontal?: boolean
    pushOtherPanes?: boolean
    rtl?: boolean
    firstSplitter?: boolean
    dblClickSplitter?: boolean
  }>

  export const Pane: DefineComponent<{
    size?: number
    minSize?: number
    maxSize?: number
  }>
}
