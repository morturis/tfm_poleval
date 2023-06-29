import { Language } from './enums/Language.enum';
import { PhraseKey } from './enums/PhraseKey.enum';

export const LanguageMappings: Record<Language, Record<PhraseKey, string>> = {
  ES: {
    [PhraseKey.button_add]: 'Añadir',
    [PhraseKey.button_add_one]: 'Añadir un/a',
    [PhraseKey.button_remove_last]: 'Eliminar último/a',
    [PhraseKey.button_cancel]: 'Cancelar',
    [PhraseKey.button_ok]: 'Aceptar',
  },
  EN: {
    [PhraseKey.button_add]: 'Add',
    [PhraseKey.button_add_one]: 'Add one',
    [PhraseKey.button_remove_last]: 'Remove last',
    [PhraseKey.button_cancel]: 'Cancel',
    [PhraseKey.button_ok]: 'OK',
  },
};
