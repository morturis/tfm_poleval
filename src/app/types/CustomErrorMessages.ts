export class CustomErrorMessages {
  static required: Record<string, (error?: string) => string> = {
    required: () => 'error_required_field',
    date_range_both_required: () => 'error_date_range_both_required',
  };
  static date_range_both_required: Record<string, (error?: string) => string> =
    {
      date_range_both_required: () => 'error_date_range_both_required',
    };
}
