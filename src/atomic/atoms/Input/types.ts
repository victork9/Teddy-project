export interface Props {
  value: string;
  onChange: (value: string) => void;
  label: string;
  Id?: string;
  error?: boolean;
  errormessage?: string;
  [key: string]: any;
}
