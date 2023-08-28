export class CustomErrorMessages {
  static required: Record<string, (error?: string) => string> = {
    required: () => 'error_required_field',
  };
}
