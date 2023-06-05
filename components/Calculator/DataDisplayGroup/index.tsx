import { Group, Text } from "@mantine/core";

interface CalculatorSectionDataDisplayGroup {
  label: string;
  data: string;
}

export default function CalculatorSectionDataDisplayGroup({
  label,
  data,
}: CalculatorSectionDataDisplayGroup) {
  return (
    <Group position="apart" my="xs">
      <Text color="dimmed">{label}</Text> <Text weight="bold">{data}</Text>
    </Group>
  );
}
