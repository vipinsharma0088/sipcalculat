import useWindowSize from "@/hooks/useWindowSize";
import { Container, Group, Input, Slider, Text } from "@mantine/core";

interface CalculatorSectionInputGroupProps {
  label: string;
  value: number;
  setValue: (value: number) => any;
  min: number;
  max: number;
  step: number;
}

export default function CalculatorSectionInputGroup({
  label,
  value,
  setValue,
  min,
  max,
  step,
}: CalculatorSectionInputGroupProps) {
  const { width } = useWindowSize();

  value = Number(value.toFixed(1));

  return (
    <Container px={0} py="sm">
      <Group position="apart">
        <Text>{label}</Text>
        <Input
          type="number"
          value={value}
          w={width > 400 ? 96 : 74}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </Group>

      <Slider
        mt="xs"
        value={value}
        onChange={setValue}
        min={min}
        max={max}
        step={step}
      />
    </Container>
  );
}
