export interface Control {
  icon?: string
  label?: string
  key?: string
  placeholder?: string
  class?: string,
  value?: any,
  isEdit?: boolean,
  src?: string, // For PDF file only
  zoom?: number, // For PDF file only
  min?: number,
  max?: number,
  maxLength?: number,
  required?: boolean,
  tooltip?: string,
  hint?: string,
  options?: {
    label: string,
    key: string,
    value: string | number | boolean,
    selected?: boolean,
  }[],
  type: 'email' | 'password' | 'text' | 'number' | 'date' | 'time' | 'select' | 'autocomplete' | 'checkbox-group' | 'radio-group' | 'pdf' | 'table' | 'img',
}
