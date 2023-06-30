import { Language } from './enums/Language.enum';
import { PhraseKey } from './enums/PhraseKey.enum';

export const LanguageMappings: Record<Language, Record<PhraseKey, string>> = {
  ES: {
    [PhraseKey.button_add]: 'Añadir',
    [PhraseKey.button_add_one]: 'Añadir un/a',
    [PhraseKey.button_remove_last]: 'Eliminar último/a',
    [PhraseKey.button_cancel]: 'Cancelar',
    [PhraseKey.button_ok]: 'Aceptar',
    [PhraseKey.toolbar_home]: 'Inicio',
    [PhraseKey.toolbar_contact]: 'Contacto',
    [PhraseKey.toolbar_we_are]: '¿Quienes somos?',
    [PhraseKey.toolbar_log_in]: 'Identificarse',
    [PhraseKey.toolbar_sign_up]: 'Registrarse',
    [PhraseKey.new_eval]: 'Nueva evaluación',
    [PhraseKey.name_of_app]: '@TFM',
    [PhraseKey.back_to_top]: 'Volver arriba',
  },
  EN: {
    [PhraseKey.button_add]: 'Add',
    [PhraseKey.button_add_one]: 'Add one',
    [PhraseKey.button_remove_last]: 'Remove last',
    [PhraseKey.button_cancel]: 'Cancel',
    [PhraseKey.button_ok]: 'OK',
    [PhraseKey.toolbar_home]: 'Home',
    [PhraseKey.toolbar_contact]: 'Contact',
    [PhraseKey.toolbar_we_are]: 'Who are we?',
    [PhraseKey.toolbar_log_in]: 'Log in',
    [PhraseKey.toolbar_sign_up]: 'Sign up',
    [PhraseKey.new_eval]: 'New evaluation',
    [PhraseKey.name_of_app]: '@TFM',
    [PhraseKey.back_to_top]: 'Back to top',
  },
};
