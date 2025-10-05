import MultipleSelector from "@/components/ui/multiselect";

type Option = { id: number; name: string };

export default function MultipleSelection({
  options,
  value,
  onChange,
}: {
  options: Option[];
  value: number[];
  onChange: (val: number[]) => void;
}) {
  const selectedValues = options
    .filter((opt) => value.includes(opt.id))
    .map((opt) => ({ value: opt.id.toString(), label: opt.name }));

  return (
    <div className="*:not-first:mt-2">
      <MultipleSelector
        commandProps={{
          label: "Select Categories",
        }}
        defaultOptions={options.map((option) => ({
          value: option.id.toString(),
          label: option.name,
        }))}
        value={selectedValues}
        onChange={(values) => {
          const selectedIds = values.map((v) => Number(v.value));
          onChange(selectedIds); // push to react-hook-form
        }}
        placeholder="Select categories"
        hideClearAllButton
        hidePlaceholderWhenSelected
        emptyIndicator={<p className="text-center text-sm">No results found</p>}
      />
    </div>
  );
}
