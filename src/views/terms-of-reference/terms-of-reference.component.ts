import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DynamicFormView } from 'src/app/types/DynamicFormView';
import { EvaluationProperties } from 'src/app/types/Evaluation';
import { AnyFieldConfig, TableConfig } from 'src/app/types/FieldConfig';
import { EvaluationService } from 'src/services/evaluation.service';

@Component({
  selector: 'app-terms-of-reference',
  templateUrl: './terms-of-reference.component.html',
  styleUrls: ['./terms-of-reference.component.scss'],
})
export class TermsOfReferenceComponent extends DynamicFormView {
  studiedActorsTableConfig: TableConfig = {
    header: 'actor_table',
    field: 'actor_table',
    fieldType: 'table',
    itemName: 'actor',
    canAddRemove: false,
    columns: [
      {
        header: 'actor_name',
        field: 'actor_name',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: true,
        placeholder: 'actor_name_placeholder',
        info: 'actor_name_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'error_required_field',
        },
      },
    ],
  };
  teamManagersTableConfig: TableConfig = {
    header: 'team_manager_table',
    field: 'team_manager_table',
    fieldType: 'table',
    itemName: 'Manager',
    canAddRemove: false,
    columns: [
      {
        header: 'manager_name',
        field: 'manager_name',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: true,
        placeholder: 'manager_name_placeholder',
        info: 'manager_name_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'error_required_field',
        },
      },
      {
        header: 'manager_role',
        field: 'manager_role',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: true,
        placeholder: 'manager_role_placeholder',
        info: 'manager_role_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'error_required_field',
        },
      },
    ],
  };

  teamMembersTableConfig: TableConfig = {
    header: 'team_member_table',
    field: 'team_member_table',
    fieldType: 'table',
    itemName: 'member', //TODO translate
    canAddRemove: false,
    columns: [
      {
        header: 'team_member_name',
        field: 'team_member_name',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: true,
        placeholder: 'team_member_name_placeholder',
        info: 'team_member_name_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'error_required_field',
        },
      },
      {
        header: 'team_member_role',
        field: 'team_member_role',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: true,
        placeholder: 'team_member_role_placeholder',
        info: 'team_member_role_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'error_required_field',
        },
      },
    ],
  };

  otherParticipantsTableConfig: TableConfig = {
    header: 'other_participants_table',
    field: 'other_participants_table',
    fieldType: 'table',
    itemName: 'member', //TODO translate
    canAddRemove: false,
    columns: [
      {
        header: 'other_participants_name',
        field: 'other_participants_name',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: true,
        placeholder: 'other_participants_name_placeholder',
        info: 'other_participants_name_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'error_required_field',
        },
      },
      {
        header: 'other_participants_role',
        field: 'other_participants_role',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: true,
        placeholder: 'other_participants_role_placeholder',
        info: 'other_participants_role_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'error_required_field',
        },
      },
    ],
  };

  toolsTableConfig: TableConfig = {
    header: 'tools_table',
    field: 'tools_table',
    fieldType: 'table',
    itemName: 'tool', //TODO translate
    canAddRemove: false,
    columns: [
      {
        header: 'tools_name',
        field: 'tools_name',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: true,
        placeholder: 'tools_name_placeholder',
        info: 'tools_name_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'error_required_field',
        },
      },
      {
        header: 'tools_brief_description',
        field: 'tools_brief_description',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: true,
        placeholder: 'tools_brief_description_placeholder',
        info: 'tools_brief_description_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'error_required_field',
        },
      },
    ],
  };

  override fieldsConfig: AnyFieldConfig[] = [
    {
      header: 'intervention_name',
      field: 'intervention_name',
      fieldType: 'input',
      defaultValue: undefined,
      viewOnly: true,
      labelOnLeftSide: true,
      placeholder: 'intervention_name_placeholder',
      info: 'intervention_name_info',
      validators: [Validators.required],
      errorMessages: {
        required: () => 'error_required_field',
      },
    },
    {
      header: 'evaluation_org',
      field: 'evaluation_org',
      fieldType: 'input',
      defaultValue: undefined,
      viewOnly: true,
      labelOnLeftSide: true,
      placeholder: 'evaluation_org_placeholder',
      info: 'evaluation_org_info',
      validators: [Validators.required],
      errorMessages: {
        required: () => 'error_required_field',
      },
    },
    //TODO fase del ciclo
    {
      header: 'evaluation_objective',
      field: 'evaluation_objective',
      fieldType: 'input',
      defaultValue: undefined,
      viewOnly: true,
      labelOnLeftSide: true,
      placeholder: 'evaluation_objective_placeholder',
      info: 'evaluation_objective_info',
      validators: [Validators.required],
      errorMessages: {
        required: () => 'error_required_field',
      },
    },
    {
      header: 'evaluation_reasoning',
      field: 'evaluation_reasoning',
      fieldType: 'input',
      defaultValue: undefined,
      viewOnly: true,
      labelOnLeftSide: true,
      placeholder: 'evaluation_reasoning_placeholder',
      info: 'evaluation_reasoning_info',
      validators: [Validators.required],
      errorMessages: {
        required: () => 'error_required_field',
      },
    },
    {
      header: 'evaluation_utility',
      field: 'evaluation_utility',
      fieldType: 'input',
      defaultValue: undefined,
      viewOnly: true,
      labelOnLeftSide: true,
      placeholder: 'evaluation_utility_placeholder',
      info: 'evaluation_utility_info',
      validators: [Validators.required],
      errorMessages: {
        required: () => 'error_required_field',
      },
    },
    this.studiedActorsTableConfig,
    //Delimitar TODO
    //zona geografica
    this.studiedActorsTableConfig,
    //tiempo

    {
      header: 'other_delimitations',
      field: 'other_delimitations',
      fieldType: 'input',
      defaultValue: undefined,
      viewOnly: true,
      labelOnLeftSide: true,
      placeholder: 'other_delimitations_placeholder',
      info: 'other_delimitations_info',
    },
    //Estrategia TODO
    this.teamManagersTableConfig,
    this.teamMembersTableConfig,
    this.otherParticipantsTableConfig,
    this.toolsTableConfig,
  ];

  constructor(
    fb: FormBuilder,
    private evalService: EvaluationService,
    private route: ActivatedRoute
  ) {
    super(fb);
    this.buildForm(this.fieldsConfig);
  }

  ngOnInit() {
    const formCode = this.route.snapshot.paramMap.get('code');
    if (!formCode)
      throw new Error('Please create a new evaluation from the beginning'); //should never trigger

    //Whenever I enter this form, I check for previously saved values
    //NOTE: this does not get the value from storage when moving between stages
    const savedValue =
      this.evalService.get(formCode)?.[
        EvaluationProperties['analysis-planning']
      ];
    if (savedValue) this.form.patchValue(savedValue, { emitEvent: true });
  }
}
