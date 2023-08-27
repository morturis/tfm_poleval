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

    [PhraseKey.delimitations_geo]: 'Delimitación geográfica',
    [PhraseKey.delimitations_geo_placeholder]: 'e.g. Provincia de Sevilla',
    [PhraseKey.delimitations_geo_info]:
      'La delimitación geográfica puede ser a nivel extremadamente local, como un único barrio, o incluso a nivel supranacional, como la península ibérica o la Unión Europea.',

    [PhraseKey.actor_table]:
      'Actores sobre los que se desea evaluar la intervención',
    [PhraseKey.actor_unit]: 'actor',
    [PhraseKey.actor_name]: 'Nombre del grupo de actores',
    [PhraseKey.actor_name_placeholder]: 'e.g. Funcionarios del ayuntamiento',
    [PhraseKey.actor_name_info]:
      'Actores de la evaluación que queremos evaluar. No es necesario recoger todos los actores, sólo aquellos para los que se desee realizar la evaluación.',

    [PhraseKey.delimitations_time_period]: 'Delimitación de periodo temporal',
    [PhraseKey.delimitations_time_period_placeholder]:
      'e.g. Desde Enero 2020 hasta Febrero 2021',
    [PhraseKey.delimitations_time_period_info]:
      'Periodo de la intervención que se desea evaluar. Si se deja vacío, se asume que se desea evaluar la totalidad de la intervención.',

    [PhraseKey.team_manager_table]: 'Líder a cargo de la evaluación',
    [PhraseKey.manager_unit]: 'líder',
    [PhraseKey.manager_name]: 'Nombre del gestor',
    [PhraseKey.manager_name_placeholder]: 'e.g. Juan Pérez',
    [PhraseKey.manager_name_info]:
      'Nombre de la/s persona/s a cargo de la evaluación.',
    [PhraseKey.manager_role]: 'Rol',
    [PhraseKey.manager_role_placeholder]: 'e.g. Entrevistador',
    [PhraseKey.manager_role_info]:
      'Rol o cargo de la persona en el proceso de evaluación.',

    [PhraseKey.team_member_table]: 'Miembros del equipo de evaluación',
    [PhraseKey.member_unit]: 'miembro del equipo',
    [PhraseKey.team_member_name]: 'Nombre',
    [PhraseKey.team_member_name_placeholder]: 'e.g. Juan Pérez',
    [PhraseKey.team_member_name_info]: '',
    [PhraseKey.team_member_role]: 'Rol',
    [PhraseKey.team_member_role_placeholder]: 'e.g. Entrevistador',
    [PhraseKey.team_member_role_info]:
      'Rol o cargo de la persona en el proceso de evaluación.',

    [PhraseKey.other_participants_table]:
      'Otros miembros del equipo de evaluación, como podrían ser terceras partes',
    [PhraseKey.other_participants_unit]: 'participante',
    [PhraseKey.other_participants_name]: 'Nombre',
    [PhraseKey.other_participants_name_placeholder]: 'e.g. Juan Pérez',
    [PhraseKey.other_participants_name_info]: '',
    [PhraseKey.other_participants_role]: 'Rol',
    [PhraseKey.other_participants_role_placeholder]: 'e.g. Interviewer',
    [PhraseKey.other_participants_role_info]:
      'Rol o cargo de la persona en el proceso de evaluación.',

    [PhraseKey.tools_table]: 'Herramientas o técnicas a utilizar',
    [PhraseKey.tool_unit]: 'herramienta o técnica',
    [PhraseKey.tools_name]: 'Nombre',
    [PhraseKey.tools_name_placeholder]: 'e.g. Análisis DAFO',
    [PhraseKey.tools_name_info]: '',
    [PhraseKey.tools_brief_description]: 'Descripción breve',
    [PhraseKey.tools_brief_description_placeholder]:
      'e.g. Técnica de planificación estratégica',
    [PhraseKey.tools_brief_description_info]:
      'Breve descripción de la herramienta. No es necesario indicar el uso que se le dará, pues esta información se introducirá más adelante.',

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

    //Contexto de la intervención
    [PhraseKey.intervention_problem_to_solve]:
      'Problema que la intervención pretendía resolver',
    [PhraseKey.intervention_problem_to_solve_placeholder]:
      'e.g. Reducir el número de accidentes de tráfico mortales',
    [PhraseKey.intervention_problem_to_solve_info]:
      'Por norma general, el texto de la intervención especificará en el preámbulo qué problema busca resolver.',

    [PhraseKey.intervention_upper_level_strategy]:
      'Plan estratégico que contiene la intervención',
    [PhraseKey.intervention_upper_level_strategy_placeholder]:
      'e.g. Plan XIII de seguridad vial',
    [PhraseKey.intervention_upper_level_strategy_info]:
      'Existen intervenciones que podrían quedar enmarcadas dentro de una estrategia superior. Esta estrategia podría surgir de la misma entidad que realiza la intervención, pero también de entidades superiores, como la Unión Europea.',

    [PhraseKey.intervention_simultaneous]: 'Otras intervenciones simultáneas',
    [PhraseKey.intervention_simultaneous_placeholder]:
      'e.g. Plan de renovación de carreteras 2018',
    [PhraseKey.intervention_simultaneous_info]:
      'Dada la naturaleza compleja de las políticas públicas, es común que varias intervenciones simultáneas en el tiempo interactúen entre sí. Esto podría afectar positiva o negativamente la consecución de objetivos de la intervención a evaluar.',
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
      'e.g. measuring the effectivenes of surgical mask distribution procedures',
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

    [PhraseKey.delimitations_geo]: 'Geographical delimitacion',
    [PhraseKey.delimitations_geo_placeholder]: 'e.g. City of Madrid',
    [PhraseKey.delimitations_geo_info]:
      'Interventions may be delimited from a very local level, such as a single neighbourhood, to a supranational level, such as the European Union.',

    [PhraseKey.actor_table]:
      'Actors over which the intervention should be evaluated',
    [PhraseKey.actor_unit]: 'actor',
    [PhraseKey.actor_name]: 'Group of actors',
    [PhraseKey.actor_name_placeholder]: 'e.g. City hall employees',
    [PhraseKey.actor_name_info]:
      'Actors involved in the intervention to be evaluated. Only those we wish to evaluate should be included.',

    [PhraseKey.delimitations_time_period]: 'Time period delimitation',
    [PhraseKey.delimitations_time_period_placeholder]:
      'e.g. From 18th of January 2020 to 19th of March 2021',
    [PhraseKey.delimitations_time_period_info]:
      'Period of the intervention we wish to evaluate. If left empty, it is assumed the entirety of the intervention period should be evaluated.',

    [PhraseKey.team_manager_table]: 'Manager in charge of the evaluation',
    [PhraseKey.manager_unit]: 'manager',
    [PhraseKey.manager_name]: 'Manager name',
    [PhraseKey.manager_name_placeholder]: 'e.g. Juan Pérez',
    [PhraseKey.manager_name_info]:
      'Name of the people in charge of the evaluation team.',
    [PhraseKey.manager_role]: 'Role',
    [PhraseKey.manager_role_placeholder]: 'e.g. Interviewer',
    [PhraseKey.manager_role_info]:
      'Role or position of the person within the evaluation team.',

    [PhraseKey.team_member_table]: 'Members of the evaluation team',
    [PhraseKey.member_unit]: 'team member',
    [PhraseKey.team_member_name]: 'Name',
    [PhraseKey.team_member_name_placeholder]: 'e.g. Juan Pérez',
    [PhraseKey.team_member_name_info]: '',
    [PhraseKey.team_member_role]: 'Role',
    [PhraseKey.team_member_role_placeholder]: 'e.g. Interviewer',
    [PhraseKey.team_member_role_info]:
      'Role or position of the person within the evaluation team.',

    [PhraseKey.other_participants_table]:
      'Other members of the evaluation team, such as third parties',
    [PhraseKey.other_participants_unit]: 'participant',
    [PhraseKey.other_participants_name]: 'Name',
    [PhraseKey.other_participants_name_placeholder]: 'e.g. Juan Pérez',
    [PhraseKey.other_participants_name_info]: '',
    [PhraseKey.other_participants_role]: 'Role',
    [PhraseKey.other_participants_role_placeholder]: 'e.g. Interviewer',
    [PhraseKey.other_participants_role_info]:
      'Role or position of the person within the evaluation team.',

    [PhraseKey.tools_table]: 'Tools or techniques to be used',
    [PhraseKey.tool_unit]: 'tool or technique',
    [PhraseKey.tools_name]: 'Name',
    [PhraseKey.tools_name_placeholder]: 'e.g. SWOT analysis',
    [PhraseKey.tools_name_info]: '',
    [PhraseKey.tools_brief_description]: 'Brief description',
    [PhraseKey.tools_brief_description_placeholder]:
      'e.g. Strategic planning technique',
    [PhraseKey.tools_brief_description_info]:
      'Brief description of the tool or technique. It is not necessary to describe what use it will have, since that information will be collected at a later point.',

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

    //Intervention context
    [PhraseKey.intervention_problem_to_solve]:
      'Problem the intervention aimed to solve',
    [PhraseKey.intervention_problem_to_solve_placeholder]:
      'e.g. Reducing the number of car accident deaths',
    [PhraseKey.intervention_problem_to_solve_info]:
      'As a general rule, this will be specified in the preamble of the text of the intervention document itself.',

    [PhraseKey.intervention_upper_level_strategy]:
      'Stretagic plan that encompasses the intervention',
    [PhraseKey.intervention_upper_level_strategy_placeholder]:
      'e.g. XIII plan for road safety',
    [PhraseKey.intervention_upper_level_strategy_info]:
      'Some interventions may be encompassed within a strategic level plan. This plan may come from the same institution that implemented the intervention, but it may also come from another institution higher in the hierarchy, such as the European Union.',

    [PhraseKey.intervention_simultaneous]: 'Other simultaneous interventions',
    [PhraseKey.intervention_simultaneous_placeholder]:
      'e.g. 2018 road renewal directive',
    [PhraseKey.intervention_simultaneous_info]:
      'Given the complex nature of public policies, it is common for two simultaneous interventions to interact. This may affect the evaluated intervention both possitively and negatively, and should be taken into account.',
  },
};
