export function preventOverflow<TInput extends string | number, TMask>(
  input: TInput,
  letters: number,
  mask: TMask,
): TInput | TMask {
  if (input.toString().length > letters) {
    return mask;
  }

  return input;
}
