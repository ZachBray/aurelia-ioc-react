export abstract class ISelectorView<T> {
  abstract render(props: {
    value: T,
    options: T[],
    onChange: (value: T) => void
  });
}
