import { Select, type SelectProps, type SelectOption, cn } from 'rizzui';

const StatusField = ({
  placeholder = 'Select status',
  dropdownClassName,
  ...props
}: SelectProps<SelectOption>) => {
  return (
    <Select
      inPortal={false}
      placeholder={placeholder}
      selectClassName="h-9 min-w-[150px]"
      dropdownClassName={cn('p-1.5 !z-0', dropdownClassName)}
      optionClassName="h-9"
      {...props}
    />
  );
};

export default StatusField;
