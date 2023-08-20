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
    [PhraseKey.toolbar_log_out]: 'Cerrar sesión',
    [PhraseKey.new_eval]: 'Nueva evaluación',
    [PhraseKey.edit_eval]: 'Editar evaluación',
    [PhraseKey.name_of_app]: '@TFM',
    [PhraseKey.back_to_top]: 'Volver arriba',
    [PhraseKey.enter_code_button]: 'Introducir código',

    //Login
    [PhraseKey.username]: 'Nombre de usuario',
    [PhraseKey.password]: 'Contraseña',
    [PhraseKey.username_placeholder]: 'Introduzca su usuario aquí',
    [PhraseKey.password_placeholder]: 'Introduzca su contraseña aquí',
    [PhraseKey.error_required_field]: 'Campo obligatorio',
    [PhraseKey.username_info]: '',
    [PhraseKey.password_info]: '',

    //Fill form screen
    [PhraseKey.code]: 'Código del formulario',
    [PhraseKey.code_placeholder]: 'e.g. KHMMZ',
    [PhraseKey.code_info]: '',
    [PhraseKey.fill_form]: 'Rellenar cuestionario',
    [PhraseKey.save_response]: 'Guardar respuesta',

    //Stage names
    [PhraseKey.first_stage]: 'Análisis y planificación',
    [PhraseKey.document_terms_of_reference]: 'Informe preliminar',
    [PhraseKey.second_stage]: 'Contexto de la intervención',
    [PhraseKey.third_stage]: 'Diseño de la evaluación',
    [PhraseKey.fourth_stage]: 'Trabajo de campo',
    [PhraseKey.document_final_report]: 'Informe final',
    [PhraseKey.back]: 'Atrás',
    [PhraseKey.next]: 'Siguiente',

    //Analysis stage
    [PhraseKey.intervention_name]: 'Nombre de la intervención a ser evaluada',
    [PhraseKey.intervention_name_placeholder]:
      'e.g. Programa Nacional de Desarrollo Rural',
    [PhraseKey.intervention_name_info]:
      'No es necesario indicar un horizonte temporal o cualquier otra delimitación. Esto se hará en una pantalla posterior',
    [PhraseKey.evaluation_org]: 'Organismo encargado de la evaluación',
    [PhraseKey.evaluation_org_placeholder]: 'e.g. AEVAL',
    [PhraseKey.evaluation_org_info]: '',
    [PhraseKey.evaluation_objective]: 'Objetivo de la evaluación',
    [PhraseKey.evaluation_objective_placeholder]:
      'e.g. evaluar la efectividad de la distribución de mascarillas',
    [PhraseKey.evaluation_objective_info]: '',
    [PhraseKey.evaluation_reasoning]: 'Razón o propósito de la evaluación',
    [PhraseKey.evaluation_reasoning_placeholder]:
      'e.g. se quiere repetir y se desea saber si hay posibles mejoras',
    [PhraseKey.evaluation_reasoning_info]: '',
    [PhraseKey.evaluation_utility]: 'La utilidad de la evaluación es',
    [PhraseKey.evaluation_utility_placeholder]:
      'e.g. aportar evidencias para rediseñar la ley',
    [PhraseKey.evaluation_utility_info]: '',
    [PhraseKey.other_delimitations]: 'Otras delimitaciones',
    [PhraseKey.other_delimitations_placeholder]:
      'e.g. personas de más de 65 años',
    [PhraseKey.other_delimitations_info]: '',
    [PhraseKey.intervention_life_cycle]:
      'Fase del ciclo de vida en que se encuentra la intervención',
    [PhraseKey.intervention_life_cycle_1]: 'Todavía no ha sido implementada',
    [PhraseKey.intervention_life_cycle_2]: 'Implementación en curso',
    [PhraseKey.intervention_life_cycle_3]: 'Implementada totalmente',
    [PhraseKey.intervention_life_cycle_info]: '',
    [PhraseKey.eval_strategy]: 'Estrategia de la evaluación',
    [PhraseKey.eval_strategy_placeholder]: 'e.g. //TODO',
    [PhraseKey.eval_strategy_info]: '//TODO',

    //FIeld work
    [PhraseKey.field_work_no_code]: 'No se ha generado código',
    [PhraseKey.make_code_available_text]:
      'Los respondentes pueden acceder al cuestionario usando este código',
    [PhraseKey.field_work_phase_description]:
      'Adicionalmente, esta pantalla permite visualizar los resultados de las respuestas hasta el momento:',

    //Form builder
    [PhraseKey.form_maker_stage]: 'Crear cuestionario',
    [PhraseKey.save_form]: 'Guardar cuestionario',
    [PhraseKey.drag_to_add_to_form]: 'Arrastre para añadir al cuestionario',
    [PhraseKey.drag_drop_input]: 'Pregunta de texto libre',
    [PhraseKey.drag_drop_input_placeholder]: 'e.g. ¿Cómo ha ido el día?',
    [PhraseKey.drag_drop_input_header]: 'Título',
    [PhraseKey.drag_drop_input_answer]: 'Respuesta',
    [PhraseKey.drag_drop_dropdown]: 'Pregunta de elección única',
    [PhraseKey.drag_drop_dropdown_placeholder]: 'e.g. Azul \ne.g. Rojo',
    [PhraseKey.drag_drop_dropdown_separate_lines]:
      'Introduzca cada opción en una línea separada',
    [PhraseKey.drag_drop_dropdown_options]: 'Opciones',
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
    [PhraseKey.toolbar_log_out]: 'Log out',
    [PhraseKey.new_eval]: 'New evaluation',
    [PhraseKey.edit_eval]: 'Edit evaluation',
    [PhraseKey.name_of_app]: '@TFM',
    [PhraseKey.back_to_top]: 'Back to top',
    [PhraseKey.enter_code_button]: 'Enter code',

    // Login buttons
    [PhraseKey.username]: 'Username',
    [PhraseKey.password]: 'Password',
    [PhraseKey.username_placeholder]: 'Enter your username here',
    [PhraseKey.password_placeholder]: 'Enter your password here',
    [PhraseKey.error_required_field]: 'This field is required',
    [PhraseKey.username_info]: '',
    [PhraseKey.password_info]: '',

    //Fill form screen
    [PhraseKey.code]: 'Code of the form',
    [PhraseKey.code_placeholder]: 'e.g. KHMMZ',
    [PhraseKey.code_info]: '',
    [PhraseKey.fill_form]: 'Fill a questionnaire',
    [PhraseKey.save_response]: 'Guardar respuesta',

    //Stage names
    [PhraseKey.first_stage]: 'Analysis and planning',
    [PhraseKey.document_terms_of_reference]: 'Terms of reference',
    [PhraseKey.second_stage]: 'Intervention context',
    [PhraseKey.third_stage]: 'Evaluation design',
    [PhraseKey.fourth_stage]: 'Field work',
    [PhraseKey.document_final_report]: 'Final report',
    [PhraseKey.back]: 'Back',
    [PhraseKey.next]: 'Next',
    //Analysis stage
    [PhraseKey.intervention_name]: 'Name of the intervention to be evaluated',
    [PhraseKey.intervention_name_placeholder]:
      "e.g. Girls' education portfolio",
    [PhraseKey.intervention_name_info]:
      'It is not necessary to specify a particular time range or any other delimitation here. This will be done in a future screen',
    [PhraseKey.evaluation_org]: 'Organization in charge of this evaluation',
    [PhraseKey.evaluation_org_placeholder]: 'e.g. UNICEF',
    [PhraseKey.evaluation_org_info]: '',
    [PhraseKey.evaluation_objective]: 'The objective of this evaluation is',
    [PhraseKey.evaluation_objective_placeholder]:
      'e.g. measuring the effectivenes of mask distribution procedures',
    [PhraseKey.evaluation_objective_info]: '',
    [PhraseKey.evaluation_reasoning]: 'The reasoning behind this evaluation is',
    [PhraseKey.evaluation_reasoning_placeholder]:
      'e.g. finding improvements towards a future revival of this policy',
    [PhraseKey.evaluation_reasoning_info]: '',
    [PhraseKey.evaluation_utility]: 'This evaluation is useful because',
    [PhraseKey.evaluation_utility_placeholder]:
      'e.g. it will help gather evidence in order to redesign the law',
    [PhraseKey.evaluation_utility_info]: '',
    [PhraseKey.other_delimitations]: 'Other delimitations',
    [PhraseKey.other_delimitations_placeholder]:
      'e.g. People older than 65 years of age',
    [PhraseKey.other_delimitations_info]: '',
    [PhraseKey.intervention_life_cycle]:
      'Stage of its life cycle the intervention is currently in',
    [PhraseKey.intervention_life_cycle_1]: 'Has yet to be implemented',
    [PhraseKey.intervention_life_cycle_2]: 'Implementation is ongoing',
    [PhraseKey.intervention_life_cycle_3]: 'Fully implemented',
    [PhraseKey.intervention_life_cycle_info]: '',
    [PhraseKey.eval_strategy]: 'Evaluation strategy',
    [PhraseKey.eval_strategy_placeholder]: 'e.g. //TODO',
    [PhraseKey.eval_strategy_info]: '//TODO',

    //Field work
    [PhraseKey.field_work_no_code]: 'No code was generated',
    [PhraseKey.make_code_available_text]:
      'Respondents can access this questionaire by using this code:',
    [PhraseKey.field_work_phase_description]:
      'Aditionally, this screen shows a breakdown of the responses so far',

    //Form builder
    [PhraseKey.form_maker_stage]: 'Create questionaire',
    [PhraseKey.save_form]: 'Save questionaire',
    [PhraseKey.drag_to_add_to_form]: 'Drag to add to the questionnaire',
    [PhraseKey.drag_drop_input]: 'Free text question',
    [PhraseKey.drag_drop_input_placeholder]: 'e.g. ¿How was your day?',
    [PhraseKey.drag_drop_input_header]: 'Title',
    [PhraseKey.drag_drop_input_answer]: 'Answer',
    [PhraseKey.drag_drop_dropdown]: 'Single-choice question',
    [PhraseKey.drag_drop_dropdown_placeholder]: 'e.g. Blue \ne.g. Red',
    [PhraseKey.drag_drop_dropdown_separate_lines]:
      'Please enter each option in a separate line',
    [PhraseKey.drag_drop_dropdown_options]: 'Options',
  },
};
