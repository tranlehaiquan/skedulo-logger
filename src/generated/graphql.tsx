import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AttendeeStatus: any;
  AvailabilityStatus: any;
  Base64: any;
  BigDecimal: any;
  CustomerConfirmationStatus: any;
  Duration: any;
  EQLOrderByClauseAccountResourceScores: any;
  EQLOrderByClauseAccountTags: any;
  EQLOrderByClauseAccounts: any;
  EQLOrderByClauseActivities: any;
  EQLOrderByClauseActivityResources: any;
  EQLOrderByClauseAdminSetting: any;
  EQLOrderByClauseAttendees: any;
  EQLOrderByClauseAvailabilities: any;
  EQLOrderByClauseAvailabilityPatternResources: any;
  EQLOrderByClauseAvailabilityPatterns: any;
  EQLOrderByClauseAvailabilityTemplateEntries: any;
  EQLOrderByClauseAvailabilityTemplateResources: any;
  EQLOrderByClauseAvailabilityTemplates: any;
  EQLOrderByClauseClientAuthorization: any;
  EQLOrderByClauseClientAuthorizationServices: any;
  EQLOrderByClauseClientAvailabilities: any;
  EQLOrderByClauseClientAvailabilityTemplate: any;
  EQLOrderByClauseContactTags: any;
  EQLOrderByClauseContacts: any;
  EQLOrderByClauseExceptionRecord: any;
  EQLOrderByClauseExceptionType: any;
  EQLOrderByClauseHolidayRegions: any;
  EQLOrderByClauseHolidays: any;
  EQLOrderByClauseJobAllocations: any;
  EQLOrderByClauseJobDependencies: any;
  EQLOrderByClauseJobOffers: any;
  EQLOrderByClauseJobProducts: any;
  EQLOrderByClauseJobTags: any;
  EQLOrderByClauseJobTasks: any;
  EQLOrderByClauseJobTimeConstraints: any;
  EQLOrderByClauseJobs: any;
  EQLOrderByClauseLocationResourceScores: any;
  EQLOrderByClauseLocations: any;
  EQLOrderByClauseLogger: any;
  EQLOrderByClauseProducts: any;
  EQLOrderByClauseRecurringSchedules: any;
  EQLOrderByClauseRegions: any;
  EQLOrderByClauseResourceJobOffers: any;
  EQLOrderByClauseResourceOverrideRegions: any;
  EQLOrderByClauseResourceOverrides: any;
  EQLOrderByClauseResourceRegions: any;
  EQLOrderByClauseResourceRequirementTags: any;
  EQLOrderByClauseResourceRequirements: any;
  EQLOrderByClauseResourceShiftBreaks: any;
  EQLOrderByClauseResourceShiftOffers: any;
  EQLOrderByClauseResourceShifts: any;
  EQLOrderByClauseResourceTags: any;
  EQLOrderByClauseResources: any;
  EQLOrderByClauseScheduleTemplates: any;
  EQLOrderByClauseShiftOfferShifts: any;
  EQLOrderByClauseShiftOffers: any;
  EQLOrderByClauseShiftTags: any;
  EQLOrderByClauseShifts: any;
  EQLOrderByClauseStarterTest: any;
  EQLOrderByClauseTagManagerSettings: any;
  EQLOrderByClauseTagRequest: any;
  EQLOrderByClauseTags: any;
  EQLOrderByClauseTemplatedActivities: any;
  EQLOrderByClauseTemplatedActivityResources: any;
  EQLOrderByClauseTemplatedAttendees: any;
  EQLOrderByClauseTemplatedJobAllocations: any;
  EQLOrderByClauseTemplatedJobDependencies: any;
  EQLOrderByClauseTemplatedJobProducts: any;
  EQLOrderByClauseTemplatedJobTags: any;
  EQLOrderByClauseTemplatedJobTasks: any;
  EQLOrderByClauseTemplatedJobTimeConstraints: any;
  EQLOrderByClauseTemplatedJobs: any;
  EQLOrderByClauseTemplatedResourceRequirementTags: any;
  EQLOrderByClauseTemplatedResourceRequirements: any;
  EQLOrderByClauseTemplatedResourceShifts: any;
  EQLOrderByClauseTemplatedShiftTags: any;
  EQLOrderByClauseTemplatedShifts: any;
  EQLOrderByClauseUserRegions: any;
  EQLOrderByClauseUser_Ext: any;
  EQLOrderByClauseUsers: any;
  EQLOrderByClauseclientAvailabilityTemplateEntry: any;
  EQLOrderByClausesked_BroadcastRecipients: any;
  EQLOrderByClausesked_Broadcasts: any;
  EQLQueryFilterAccountResourceScores: any;
  EQLQueryFilterAccountTags: any;
  EQLQueryFilterAccounts: any;
  EQLQueryFilterActivities: any;
  EQLQueryFilterActivityResources: any;
  EQLQueryFilterAdminSetting: any;
  EQLQueryFilterAttendees: any;
  EQLQueryFilterAvailabilities: any;
  EQLQueryFilterAvailabilityPatternResources: any;
  EQLQueryFilterAvailabilityPatterns: any;
  EQLQueryFilterAvailabilityTemplateEntries: any;
  EQLQueryFilterAvailabilityTemplateResources: any;
  EQLQueryFilterAvailabilityTemplates: any;
  EQLQueryFilterClientAuthorization: any;
  EQLQueryFilterClientAuthorizationServices: any;
  EQLQueryFilterClientAvailabilities: any;
  EQLQueryFilterClientAvailabilityTemplate: any;
  EQLQueryFilterContactTags: any;
  EQLQueryFilterContacts: any;
  EQLQueryFilterExceptionRecord: any;
  EQLQueryFilterExceptionType: any;
  EQLQueryFilterHolidayRegions: any;
  EQLQueryFilterHolidays: any;
  EQLQueryFilterJobAllocations: any;
  EQLQueryFilterJobDependencies: any;
  EQLQueryFilterJobOffers: any;
  EQLQueryFilterJobProducts: any;
  EQLQueryFilterJobTags: any;
  EQLQueryFilterJobTasks: any;
  EQLQueryFilterJobTimeConstraints: any;
  EQLQueryFilterJobs: any;
  EQLQueryFilterLocationResourceScores: any;
  EQLQueryFilterLocations: any;
  EQLQueryFilterLogger: any;
  EQLQueryFilterProducts: any;
  EQLQueryFilterRecurringSchedules: any;
  EQLQueryFilterRegions: any;
  EQLQueryFilterResourceJobOffers: any;
  EQLQueryFilterResourceOverrideRegions: any;
  EQLQueryFilterResourceOverrides: any;
  EQLQueryFilterResourceRegions: any;
  EQLQueryFilterResourceRequirementTags: any;
  EQLQueryFilterResourceRequirements: any;
  EQLQueryFilterResourceShiftBreaks: any;
  EQLQueryFilterResourceShiftOffers: any;
  EQLQueryFilterResourceShifts: any;
  EQLQueryFilterResourceTags: any;
  EQLQueryFilterResources: any;
  EQLQueryFilterScheduleTemplates: any;
  EQLQueryFilterShiftOfferShifts: any;
  EQLQueryFilterShiftOffers: any;
  EQLQueryFilterShiftTags: any;
  EQLQueryFilterShifts: any;
  EQLQueryFilterStarterTest: any;
  EQLQueryFilterTagManagerSettings: any;
  EQLQueryFilterTagRequest: any;
  EQLQueryFilterTags: any;
  EQLQueryFilterTemplatedActivities: any;
  EQLQueryFilterTemplatedActivityResources: any;
  EQLQueryFilterTemplatedAttendees: any;
  EQLQueryFilterTemplatedJobAllocations: any;
  EQLQueryFilterTemplatedJobDependencies: any;
  EQLQueryFilterTemplatedJobProducts: any;
  EQLQueryFilterTemplatedJobTags: any;
  EQLQueryFilterTemplatedJobTasks: any;
  EQLQueryFilterTemplatedJobTimeConstraints: any;
  EQLQueryFilterTemplatedJobs: any;
  EQLQueryFilterTemplatedResourceRequirementTags: any;
  EQLQueryFilterTemplatedResourceRequirements: any;
  EQLQueryFilterTemplatedResourceShifts: any;
  EQLQueryFilterTemplatedShiftTags: any;
  EQLQueryFilterTemplatedShifts: any;
  EQLQueryFilterUserRegions: any;
  EQLQueryFilterUser_Ext: any;
  EQLQueryFilterUsers: any;
  EQLQueryFilterclientAvailabilityTemplateEntry: any;
  EQLQueryFiltersked_BroadcastRecipients: any;
  EQLQueryFiltersked_Broadcasts: any;
  EQLRecordChangeFilterAccountResourceScores: any;
  EQLRecordChangeFilterAccountTags: any;
  EQLRecordChangeFilterAccounts: any;
  EQLRecordChangeFilterActivities: any;
  EQLRecordChangeFilterActivityResources: any;
  EQLRecordChangeFilterAdminSetting: any;
  EQLRecordChangeFilterAttendees: any;
  EQLRecordChangeFilterAvailabilities: any;
  EQLRecordChangeFilterAvailabilityPatternResources: any;
  EQLRecordChangeFilterAvailabilityPatterns: any;
  EQLRecordChangeFilterAvailabilityTemplateEntries: any;
  EQLRecordChangeFilterAvailabilityTemplateResources: any;
  EQLRecordChangeFilterAvailabilityTemplates: any;
  EQLRecordChangeFilterClientAuthorization: any;
  EQLRecordChangeFilterClientAuthorizationServices: any;
  EQLRecordChangeFilterClientAvailabilities: any;
  EQLRecordChangeFilterClientAvailabilityTemplate: any;
  EQLRecordChangeFilterContactTags: any;
  EQLRecordChangeFilterContacts: any;
  EQLRecordChangeFilterExceptionRecord: any;
  EQLRecordChangeFilterExceptionType: any;
  EQLRecordChangeFilterHolidayRegions: any;
  EQLRecordChangeFilterHolidays: any;
  EQLRecordChangeFilterJobAllocations: any;
  EQLRecordChangeFilterJobDependencies: any;
  EQLRecordChangeFilterJobOffers: any;
  EQLRecordChangeFilterJobProducts: any;
  EQLRecordChangeFilterJobTags: any;
  EQLRecordChangeFilterJobTasks: any;
  EQLRecordChangeFilterJobTimeConstraints: any;
  EQLRecordChangeFilterJobs: any;
  EQLRecordChangeFilterLocationResourceScores: any;
  EQLRecordChangeFilterLocations: any;
  EQLRecordChangeFilterLogger: any;
  EQLRecordChangeFilterProducts: any;
  EQLRecordChangeFilterRecurringSchedules: any;
  EQLRecordChangeFilterRegions: any;
  EQLRecordChangeFilterResourceJobOffers: any;
  EQLRecordChangeFilterResourceOverrideRegions: any;
  EQLRecordChangeFilterResourceOverrides: any;
  EQLRecordChangeFilterResourceRegions: any;
  EQLRecordChangeFilterResourceRequirementTags: any;
  EQLRecordChangeFilterResourceRequirements: any;
  EQLRecordChangeFilterResourceShiftBreaks: any;
  EQLRecordChangeFilterResourceShiftOffers: any;
  EQLRecordChangeFilterResourceShifts: any;
  EQLRecordChangeFilterResourceTags: any;
  EQLRecordChangeFilterResources: any;
  EQLRecordChangeFilterScheduleTemplates: any;
  EQLRecordChangeFilterShiftOfferShifts: any;
  EQLRecordChangeFilterShiftOffers: any;
  EQLRecordChangeFilterShiftTags: any;
  EQLRecordChangeFilterShifts: any;
  EQLRecordChangeFilterStarterTest: any;
  EQLRecordChangeFilterTagManagerSettings: any;
  EQLRecordChangeFilterTagRequest: any;
  EQLRecordChangeFilterTags: any;
  EQLRecordChangeFilterTemplatedActivities: any;
  EQLRecordChangeFilterTemplatedActivityResources: any;
  EQLRecordChangeFilterTemplatedAttendees: any;
  EQLRecordChangeFilterTemplatedJobAllocations: any;
  EQLRecordChangeFilterTemplatedJobDependencies: any;
  EQLRecordChangeFilterTemplatedJobProducts: any;
  EQLRecordChangeFilterTemplatedJobTags: any;
  EQLRecordChangeFilterTemplatedJobTasks: any;
  EQLRecordChangeFilterTemplatedJobTimeConstraints: any;
  EQLRecordChangeFilterTemplatedJobs: any;
  EQLRecordChangeFilterTemplatedResourceRequirementTags: any;
  EQLRecordChangeFilterTemplatedResourceRequirements: any;
  EQLRecordChangeFilterTemplatedResourceShifts: any;
  EQLRecordChangeFilterTemplatedShiftTags: any;
  EQLRecordChangeFilterTemplatedShifts: any;
  EQLRecordChangeFilterUserRegions: any;
  EQLRecordChangeFilterUser_Ext: any;
  EQLRecordChangeFilterUsers: any;
  EQLRecordChangeFilterclientAvailabilityTemplateEntry: any;
  EQLRecordChangeFiltersked_BroadcastRecipients: any;
  EQLRecordChangeFiltersked_Broadcasts: any;
  EQLRecordFilterAccountResourceScores: any;
  EQLRecordFilterAccountTags: any;
  EQLRecordFilterAccounts: any;
  EQLRecordFilterActivities: any;
  EQLRecordFilterActivityResources: any;
  EQLRecordFilterAdminSetting: any;
  EQLRecordFilterAttendees: any;
  EQLRecordFilterAvailabilities: any;
  EQLRecordFilterAvailabilityPatternResources: any;
  EQLRecordFilterAvailabilityPatterns: any;
  EQLRecordFilterAvailabilityTemplateEntries: any;
  EQLRecordFilterAvailabilityTemplateResources: any;
  EQLRecordFilterAvailabilityTemplates: any;
  EQLRecordFilterClientAuthorization: any;
  EQLRecordFilterClientAuthorizationServices: any;
  EQLRecordFilterClientAvailabilities: any;
  EQLRecordFilterClientAvailabilityTemplate: any;
  EQLRecordFilterContactTags: any;
  EQLRecordFilterContacts: any;
  EQLRecordFilterExceptionRecord: any;
  EQLRecordFilterExceptionType: any;
  EQLRecordFilterHolidayRegions: any;
  EQLRecordFilterHolidays: any;
  EQLRecordFilterJobAllocations: any;
  EQLRecordFilterJobDependencies: any;
  EQLRecordFilterJobOffers: any;
  EQLRecordFilterJobProducts: any;
  EQLRecordFilterJobTags: any;
  EQLRecordFilterJobTasks: any;
  EQLRecordFilterJobTimeConstraints: any;
  EQLRecordFilterJobs: any;
  EQLRecordFilterLocationResourceScores: any;
  EQLRecordFilterLocations: any;
  EQLRecordFilterLogger: any;
  EQLRecordFilterProducts: any;
  EQLRecordFilterRecurringSchedules: any;
  EQLRecordFilterRegions: any;
  EQLRecordFilterResourceJobOffers: any;
  EQLRecordFilterResourceOverrideRegions: any;
  EQLRecordFilterResourceOverrides: any;
  EQLRecordFilterResourceRegions: any;
  EQLRecordFilterResourceRequirementTags: any;
  EQLRecordFilterResourceRequirements: any;
  EQLRecordFilterResourceShiftBreaks: any;
  EQLRecordFilterResourceShiftOffers: any;
  EQLRecordFilterResourceShifts: any;
  EQLRecordFilterResourceTags: any;
  EQLRecordFilterResources: any;
  EQLRecordFilterScheduleTemplates: any;
  EQLRecordFilterShiftOfferShifts: any;
  EQLRecordFilterShiftOffers: any;
  EQLRecordFilterShiftTags: any;
  EQLRecordFilterShifts: any;
  EQLRecordFilterStarterTest: any;
  EQLRecordFilterTagManagerSettings: any;
  EQLRecordFilterTagRequest: any;
  EQLRecordFilterTags: any;
  EQLRecordFilterTemplatedActivities: any;
  EQLRecordFilterTemplatedActivityResources: any;
  EQLRecordFilterTemplatedAttendees: any;
  EQLRecordFilterTemplatedJobAllocations: any;
  EQLRecordFilterTemplatedJobDependencies: any;
  EQLRecordFilterTemplatedJobProducts: any;
  EQLRecordFilterTemplatedJobTags: any;
  EQLRecordFilterTemplatedJobTasks: any;
  EQLRecordFilterTemplatedJobTimeConstraints: any;
  EQLRecordFilterTemplatedJobs: any;
  EQLRecordFilterTemplatedResourceRequirementTags: any;
  EQLRecordFilterTemplatedResourceRequirements: any;
  EQLRecordFilterTemplatedResourceShifts: any;
  EQLRecordFilterTemplatedShiftTags: any;
  EQLRecordFilterTemplatedShifts: any;
  EQLRecordFilterUserRegions: any;
  EQLRecordFilterUser_Ext: any;
  EQLRecordFilterUsers: any;
  EQLRecordFilterclientAvailabilityTemplateEntry: any;
  EQLRecordFiltersked_BroadcastRecipients: any;
  EQLRecordFiltersked_Broadcasts: any;
  Instant: any;
  JobAllocationStatus: any;
  JobDependencyAnchor: any;
  JobStatus: any;
  JobTimeConstraintType: any;
  LocalDate: any;
  LocalTime: any;
  NonNegativeInt: any;
  OfferResponse: any;
  OfferStatus: any;
  PositiveIntMax200: any;
  ResourceOfferStatus: any;
  TagClassification: any;
  Weekday: any;
  WorkingHourType: any;
};

export type AccountResourceScores = {
  __typename?: 'AccountResourceScores';
  Account: Accounts;
  AccountId: Scalars['ID'];
  Blacklisted: Scalars['Boolean'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  UID: Scalars['ID'];
  Whitelisted: Scalars['Boolean'];
};

export type AccountResourceScoresConnection = {
  __typename?: 'AccountResourceScoresConnection';
  edges: Array<AccountResourceScoresEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountResourceScoresEdge = {
  __typename?: 'AccountResourceScoresEdge';
  cursor: Scalars['Base64'];
  node: AccountResourceScores;
  offset: Scalars['Int'];
};

export type AccountTags = {
  __typename?: 'AccountTags';
  Account: Accounts;
  AccountId: Scalars['ID'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  Tag: Tags;
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type AccountTagsConnection = {
  __typename?: 'AccountTagsConnection';
  edges: Array<AccountTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountTagsEdge = {
  __typename?: 'AccountTagsEdge';
  cursor: Scalars['Base64'];
  node: AccountTags;
  offset: Scalars['Int'];
};

export type Accounts = {
  __typename?: 'Accounts';
  AC?: Maybe<Users>;
  ACId?: Maybe<Scalars['ID']>;
  AVP?: Maybe<Users>;
  AVPId?: Maybe<Scalars['ID']>;
  ActiveFromDate?: Maybe<Scalars['LocalDate']>;
  ActiveThruDate?: Maybe<Scalars['LocalDate']>;
  ActualStartOfCareDate?: Maybe<Scalars['LocalDate']>;
  Availabilities: Array<ClientAvailabilities>;
  BillingCity?: Maybe<Scalars['String']>;
  BillingPostalCode?: Maybe<Scalars['String']>;
  BillingState?: Maybe<Scalars['String']>;
  BillingStreet?: Maybe<Scalars['String']>;
  CaseID?: Maybe<Scalars['String']>;
  CaseProgressionStatus?: Maybe<Scalars['String']>;
  Contacts: Array<Contacts>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DateOfBirth?: Maybe<Scalars['LocalDate']>;
  DefaultLocation?: Maybe<Locations>;
  DefaultLocationId?: Maybe<Scalars['ID']>;
  DischargeDate?: Maybe<Scalars['Instant']>;
  Division?: Maybe<Scalars['String']>;
  ExternalClientID?: Maybe<Scalars['String']>;
  FSM?: Maybe<Users>;
  FSMId?: Maybe<Scalars['ID']>;
  Fax?: Maybe<Scalars['String']>;
  Gender?: Maybe<Scalars['String']>;
  HoldDate?: Maybe<Scalars['LocalDate']>;
  Jobs: Array<Jobs>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Locations: Array<Locations>;
  MRNumber?: Maybe<Scalars['String']>;
  Name: Scalars['String'];
  NeedToRecalculateJobsLocation: Scalars['Boolean'];
  OD?: Maybe<Users>;
  ODId?: Maybe<Scalars['ID']>;
  PayerLabel?: Maybe<Scalars['String']>;
  Phone?: Maybe<Scalars['String']>;
  PlannedStartOfCareDate?: Maybe<Scalars['LocalDate']>;
  PreferredTechnician?: Maybe<Scalars['String']>;
  RCD?: Maybe<Users>;
  RCDId?: Maybe<Scalars['ID']>;
  Rank?: Maybe<Scalars['BigDecimal']>;
  Region?: Maybe<Regions>;
  RegionId?: Maybe<Scalars['ID']>;
  RequiresWhitelist: Scalars['Boolean'];
  ResourceScores: Array<AccountResourceScores>;
  ResumeServiceDate?: Maybe<Scalars['LocalDate']>;
  SC?: Maybe<Users>;
  SCId?: Maybe<Scalars['ID']>;
  ShippingCity?: Maybe<Scalars['String']>;
  ShippingPostalCode?: Maybe<Scalars['String']>;
  ShippingState?: Maybe<Scalars['String']>;
  ShippingStreet?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  Tags: Array<AccountTags>;
  UID: Scalars['ID'];
};


export type AccountsAvailabilitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterClientAvailabilities']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseClientAvailabilities']>;
};


export type AccountsContactsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterContacts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseContacts']>;
};


export type AccountsJobsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']>;
};


export type AccountsLocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterLocations']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseLocations']>;
};


export type AccountsResourceScoresArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAccountResourceScores']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAccountResourceScores']>;
};


export type AccountsTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAccountTags']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAccountTags']>;
};

export type AccountsConnection = {
  __typename?: 'AccountsConnection';
  edges: Array<AccountsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountsEdge = {
  __typename?: 'AccountsEdge';
  cursor: Scalars['Base64'];
  node: Accounts;
  offset: Scalars['Int'];
};

export type Activities = {
  __typename?: 'Activities';
  ActivityResources: Array<ActivityResources>;
  Address?: Maybe<Scalars['String']>;
  CopiedFrom?: Maybe<Activities>;
  CopiedFromId?: Maybe<Scalars['ID']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End: Scalars['Instant'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Location?: Maybe<Locations>;
  LocationId?: Maybe<Scalars['ID']>;
  Name: Scalars['String'];
  Notes?: Maybe<Scalars['String']>;
  Quantity?: Maybe<Scalars['Int']>;
  Resource?: Maybe<Resources>;
  ResourceId?: Maybe<Scalars['ID']>;
  ScheduleTemplate?: Maybe<ScheduleTemplates>;
  ScheduleTemplateId?: Maybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  TemplatedActivity?: Maybe<TemplatedActivities>;
  TemplatedActivityId?: Maybe<Scalars['ID']>;
  Timezone?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};


export type ActivitiesActivityResourcesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterActivityResources']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivityResources']>;
};

export type ActivitiesConnection = {
  __typename?: 'ActivitiesConnection';
  edges: Array<ActivitiesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ActivitiesEdge = {
  __typename?: 'ActivitiesEdge';
  cursor: Scalars['Base64'];
  node: Activities;
  offset: Scalars['Int'];
};

export type ActivityResources = {
  __typename?: 'ActivityResources';
  Activity: Activities;
  ActivityId: Scalars['ID'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type ActivityResourcesConnection = {
  __typename?: 'ActivityResourcesConnection';
  edges: Array<ActivityResourcesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ActivityResourcesEdge = {
  __typename?: 'ActivityResourcesEdge';
  cursor: Scalars['Base64'];
  node: ActivityResources;
  offset: Scalars['Int'];
};

export type AdminSetting = {
  __typename?: 'AdminSetting';
  AllDayEndTime?: Maybe<Scalars['String']>;
  AllDayStartTime?: Maybe<Scalars['String']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ReadOnlyAvailabilityForm?: Maybe<Scalars['Boolean']>;
  UID: Scalars['ID'];
};

export type AdminSettingConnection = {
  __typename?: 'AdminSettingConnection';
  edges: Array<AdminSettingEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AdminSettingEdge = {
  __typename?: 'AdminSettingEdge';
  cursor: Scalars['Base64'];
  node: AdminSetting;
  offset: Scalars['Int'];
};

export type Attendees = {
  __typename?: 'Attendees';
  CancelReason?: Maybe<Scalars['String']>;
  Contact: Contacts;
  ContactId: Scalars['ID'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Job: Jobs;
  JobId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Status: Scalars['AttendeeStatus'];
  TimeCancelled?: Maybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type AttendeesConnection = {
  __typename?: 'AttendeesConnection';
  edges: Array<AttendeesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AttendeesEdge = {
  __typename?: 'AttendeesEdge';
  cursor: Scalars['Base64'];
  node: Attendees;
  offset: Scalars['Int'];
};

export type Availabilities = {
  __typename?: 'Availabilities';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Finish: Scalars['Instant'];
  IsAvailable: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Notes?: Maybe<Scalars['String']>;
  Resource: Resources;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  Status?: Maybe<Scalars['AvailabilityStatus']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type AvailabilitiesConnection = {
  __typename?: 'AvailabilitiesConnection';
  edges: Array<AvailabilitiesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AvailabilitiesEdge = {
  __typename?: 'AvailabilitiesEdge';
  cursor: Scalars['Base64'];
  node: Availabilities;
  offset: Scalars['Int'];
};

export type AvailabilityPatternResources = {
  __typename?: 'AvailabilityPatternResources';
  AvailabilityPattern: AvailabilityPatterns;
  AvailabilityPatternId: Scalars['ID'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End?: Maybe<Scalars['Instant']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  RepeatEvery?: Maybe<Scalars['String']>;
  Resource: Resources;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  Status?: Maybe<Scalars['AvailabilityStatus']>;
  UID: Scalars['ID'];
};

export type AvailabilityPatternResourcesConnection = {
  __typename?: 'AvailabilityPatternResourcesConnection';
  edges: Array<AvailabilityPatternResourcesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AvailabilityPatternResourcesEdge = {
  __typename?: 'AvailabilityPatternResourcesEdge';
  cursor: Scalars['Base64'];
  node: AvailabilityPatternResources;
  offset: Scalars['Int'];
};

export type AvailabilityPatterns = {
  __typename?: 'AvailabilityPatterns';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Hash: Scalars['String'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Pattern: Scalars['String'];
  Resources: Array<AvailabilityPatternResources>;
  UID: Scalars['ID'];
};


export type AvailabilityPatternsResourcesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityPatternResources']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityPatternResources']>;
};

export type AvailabilityPatternsConnection = {
  __typename?: 'AvailabilityPatternsConnection';
  edges: Array<AvailabilityPatternsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AvailabilityPatternsEdge = {
  __typename?: 'AvailabilityPatternsEdge';
  cursor: Scalars['Base64'];
  node: AvailabilityPatterns;
  offset: Scalars['Int'];
};

export type AvailabilityTemplateEntries = {
  __typename?: 'AvailabilityTemplateEntries';
  AvailabilityTemplate: AvailabilityTemplates;
  AvailabilityTemplateId: Scalars['ID'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  FinishTime: Scalars['Int'];
  IsAvailable: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  StartTime: Scalars['Int'];
  UID: Scalars['ID'];
  Weekday: Scalars['Weekday'];
};

export type AvailabilityTemplateEntriesConnection = {
  __typename?: 'AvailabilityTemplateEntriesConnection';
  edges: Array<AvailabilityTemplateEntriesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AvailabilityTemplateEntriesEdge = {
  __typename?: 'AvailabilityTemplateEntriesEdge';
  cursor: Scalars['Base64'];
  node: AvailabilityTemplateEntries;
  offset: Scalars['Int'];
};

export type AvailabilityTemplateResources = {
  __typename?: 'AvailabilityTemplateResources';
  AvailabilityTemplate: AvailabilityTemplates;
  AvailabilityTemplateId: Scalars['ID'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Migrated: Scalars['Boolean'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type AvailabilityTemplateResourcesConnection = {
  __typename?: 'AvailabilityTemplateResourcesConnection';
  edges: Array<AvailabilityTemplateResourcesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AvailabilityTemplateResourcesEdge = {
  __typename?: 'AvailabilityTemplateResourcesEdge';
  cursor: Scalars['Base64'];
  node: AvailabilityTemplateResources;
  offset: Scalars['Int'];
};

export type AvailabilityTemplates = {
  __typename?: 'AvailabilityTemplates';
  AvailabilityPattern?: Maybe<AvailabilityPatterns>;
  AvailabilityPatternId?: Maybe<Scalars['ID']>;
  AvailabilityTemplateEntries: Array<AvailabilityTemplateEntries>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Finish?: Maybe<Scalars['LocalDate']>;
  Global: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  RepeatEvery?: Maybe<Scalars['String']>;
  Resources: Array<AvailabilityTemplateResources>;
  Start?: Maybe<Scalars['LocalDate']>;
  UID: Scalars['ID'];
};


export type AvailabilityTemplatesAvailabilityTemplateEntriesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityTemplateEntries']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityTemplateEntries']>;
};


export type AvailabilityTemplatesResourcesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityTemplateResources']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityTemplateResources']>;
};

export type AvailabilityTemplatesConnection = {
  __typename?: 'AvailabilityTemplatesConnection';
  edges: Array<AvailabilityTemplatesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AvailabilityTemplatesEdge = {
  __typename?: 'AvailabilityTemplatesEdge';
  cursor: Scalars['Base64'];
  node: AvailabilityTemplates;
  offset: Scalars['Int'];
};

export type ClientAuthorization = {
  __typename?: 'ClientAuthorization';
  Account?: Maybe<Accounts>;
  AccountId?: Maybe<Scalars['ID']>;
  AuthorizationEffectiveDate?: Maybe<Scalars['LocalDate']>;
  AuthorizationExpirationDate?: Maybe<Scalars['LocalDate']>;
  AuthorizationNotes?: Maybe<Scalars['String']>;
  AuthorizationStatus?: Maybe<Scalars['String']>;
  CaseProgressionStatus?: Maybe<Scalars['String']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DummyTestingField?: Maybe<Scalars['BigDecimal']>;
  ExternalID?: Maybe<Scalars['String']>;
  Jobs: Array<Jobs>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  Region?: Maybe<Regions>;
  RegionId?: Maybe<Scalars['ID']>;
  TotalAuthorizedHours?: Maybe<Scalars['BigDecimal']>;
  TotalScheduledAuthorizedHours?: Maybe<Scalars['BigDecimal']>;
  TotalUsedAuthorizedHours?: Maybe<Scalars['BigDecimal']>;
  UID: Scalars['ID'];
};


export type ClientAuthorizationJobsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']>;
};

export type ClientAuthorizationConnection = {
  __typename?: 'ClientAuthorizationConnection';
  edges: Array<ClientAuthorizationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ClientAuthorizationEdge = {
  __typename?: 'ClientAuthorizationEdge';
  cursor: Scalars['Base64'];
  node: ClientAuthorization;
  offset: Scalars['Int'];
};

export type ClientAuthorizationServices = {
  __typename?: 'ClientAuthorizationServices';
  AuthorizedHoursPerWeek?: Maybe<Scalars['BigDecimal']>;
  ClientAuthorization?: Maybe<ClientAuthorization>;
  ClientAuthorizationId?: Maybe<Scalars['ID']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DummyField?: Maybe<Scalars['BigDecimal']>;
  ExternalID?: Maybe<Scalars['String']>;
  FamilyAgreedUpon?: Maybe<Scalars['BigDecimal']>;
  HoursRemainingAfterChargeCreation?: Maybe<Scalars['BigDecimal']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  ServiceType?: Maybe<Scalars['String']>;
  TotalAuthorizedServiceHours?: Maybe<Scalars['BigDecimal']>;
  TotalScheduledServiceHours?: Maybe<Scalars['BigDecimal']>;
  TotalUsedServiceHours?: Maybe<Scalars['BigDecimal']>;
  UID: Scalars['ID'];
};

export type ClientAuthorizationServicesConnection = {
  __typename?: 'ClientAuthorizationServicesConnection';
  edges: Array<ClientAuthorizationServicesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ClientAuthorizationServicesEdge = {
  __typename?: 'ClientAuthorizationServicesEdge';
  cursor: Scalars['Base64'];
  node: ClientAuthorizationServices;
  offset: Scalars['Int'];
};

export type ClientAvailabilities = {
  __typename?: 'ClientAvailabilities';
  Account?: Maybe<Accounts>;
  AccountId?: Maybe<Scalars['ID']>;
  Contact?: Maybe<Contacts>;
  ContactId?: Maybe<Scalars['ID']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End: Scalars['Instant'];
  IsAvailable: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  PreferredEnd?: Maybe<Scalars['Instant']>;
  PreferredStart?: Maybe<Scalars['Instant']>;
  RecurringSchedule?: Maybe<RecurringSchedules>;
  RecurringScheduleId?: Maybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  UID: Scalars['ID'];
};

export type ClientAvailabilitiesConnection = {
  __typename?: 'ClientAvailabilitiesConnection';
  edges: Array<ClientAvailabilitiesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ClientAvailabilitiesEdge = {
  __typename?: 'ClientAvailabilitiesEdge';
  cursor: Scalars['Base64'];
  node: ClientAvailabilities;
  offset: Scalars['Int'];
};

export type ClientAvailabilityTemplate = {
  __typename?: 'ClientAvailabilityTemplate';
  Account?: Maybe<Accounts>;
  AccountId?: Maybe<Scalars['ID']>;
  AdjustmentType?: Maybe<Scalars['String']>;
  AllDay: Scalars['Boolean'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DatesOfMonth?: Maybe<Array<Scalars['String']>>;
  DaysOfMonth?: Maybe<Array<Scalars['String']>>;
  DaysOfWeek?: Maybe<Scalars['String']>;
  DaysOfYear?: Maybe<Scalars['String']>;
  EndDate?: Maybe<Scalars['LocalDate']>;
  EndTime?: Maybe<Scalars['LocalTime']>;
  Entries: Array<ClientAvailabilityTemplateEntry>;
  Label?: Maybe<Scalars['String']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Location?: Maybe<Locations>;
  LocationId?: Maybe<Scalars['ID']>;
  MonthsOfYear?: Maybe<Array<Scalars['String']>>;
  Note?: Maybe<Scalars['String']>;
  Pattern?: Maybe<Scalars['String']>;
  StartDate?: Maybe<Scalars['LocalDate']>;
  StartTime?: Maybe<Scalars['LocalTime']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};


export type ClientAvailabilityTemplateEntriesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterclientAvailabilityTemplateEntry']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseclientAvailabilityTemplateEntry']>;
};

export type ClientAvailabilityTemplateConnection = {
  __typename?: 'ClientAvailabilityTemplateConnection';
  edges: Array<ClientAvailabilityTemplateEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ClientAvailabilityTemplateEdge = {
  __typename?: 'ClientAvailabilityTemplateEdge';
  cursor: Scalars['Base64'];
  node: ClientAvailabilityTemplate;
  offset: Scalars['Int'];
};

export type ContactTags = {
  __typename?: 'ContactTags';
  Contact: Contacts;
  ContactId: Scalars['ID'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  Tag: Tags;
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type ContactTagsConnection = {
  __typename?: 'ContactTagsConnection';
  edges: Array<ContactTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ContactTagsEdge = {
  __typename?: 'ContactTagsEdge';
  cursor: Scalars['Base64'];
  node: ContactTags;
  offset: Scalars['Int'];
};

export type Contacts = {
  __typename?: 'Contacts';
  Account?: Maybe<Accounts>;
  AccountId?: Maybe<Scalars['ID']>;
  Availabilities: Array<ClientAvailabilities>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Email?: Maybe<Scalars['String']>;
  FirstName?: Maybe<Scalars['String']>;
  FullName: Scalars['String'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LastName: Scalars['String'];
  MailingCity?: Maybe<Scalars['String']>;
  MailingPostalCode?: Maybe<Scalars['String']>;
  MailingState?: Maybe<Scalars['String']>;
  MailingStreet?: Maybe<Scalars['String']>;
  MobilePhone?: Maybe<Scalars['String']>;
  OtherCity?: Maybe<Scalars['String']>;
  OtherPostalCode?: Maybe<Scalars['String']>;
  OtherState?: Maybe<Scalars['String']>;
  OtherStreet?: Maybe<Scalars['String']>;
  Phone?: Maybe<Scalars['String']>;
  Region?: Maybe<Regions>;
  RegionId?: Maybe<Scalars['ID']>;
  Tags: Array<ContactTags>;
  Title?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};


export type ContactsAvailabilitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterClientAvailabilities']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseClientAvailabilities']>;
};


export type ContactsTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterContactTags']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseContactTags']>;
};

export type ContactsConnection = {
  __typename?: 'ContactsConnection';
  edges: Array<ContactsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ContactsEdge = {
  __typename?: 'ContactsEdge';
  cursor: Scalars['Base64'];
  node: Contacts;
  offset: Scalars['Int'];
};

export type ExceptionRecord = {
  __typename?: 'ExceptionRecord';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  ExceptionId?: Maybe<Scalars['String']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  RuleId?: Maybe<Scalars['String']>;
  SourceId?: Maybe<Scalars['String']>;
  SourceType?: Maybe<Scalars['String']>;
  TargetId?: Maybe<Scalars['String']>;
  TargetType?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type ExceptionRecordConnection = {
  __typename?: 'ExceptionRecordConnection';
  edges: Array<ExceptionRecordEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExceptionRecordEdge = {
  __typename?: 'ExceptionRecordEdge';
  cursor: Scalars['Base64'];
  node: ExceptionRecord;
  offset: Scalars['Int'];
};

export type ExceptionType = {
  __typename?: 'ExceptionType';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  DescriptionTwo?: Maybe<Scalars['String']>;
  ExceptionType: Scalars['String'];
  ExceptionType2: Scalars['String'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type ExceptionTypeConnection = {
  __typename?: 'ExceptionTypeConnection';
  edges: Array<ExceptionTypeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExceptionTypeEdge = {
  __typename?: 'ExceptionTypeEdge';
  cursor: Scalars['Base64'];
  node: ExceptionType;
  offset: Scalars['Int'];
};

export type HolidayRegions = {
  __typename?: 'HolidayRegions';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Holiday: Holidays;
  HolidayId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Region: Regions;
  RegionId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type HolidayRegionsConnection = {
  __typename?: 'HolidayRegionsConnection';
  edges: Array<HolidayRegionsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HolidayRegionsEdge = {
  __typename?: 'HolidayRegionsEdge';
  cursor: Scalars['Base64'];
  node: HolidayRegions;
  offset: Scalars['Int'];
};

export type Holidays = {
  __typename?: 'Holidays';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndDate: Scalars['LocalDate'];
  Global: Scalars['Boolean'];
  HolidayRegions: Array<HolidayRegions>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  StartDate: Scalars['LocalDate'];
  UID: Scalars['ID'];
};


export type HolidaysHolidayRegionsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterHolidayRegions']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseHolidayRegions']>;
};

export type HolidaysConnection = {
  __typename?: 'HolidaysConnection';
  edges: Array<HolidaysEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HolidaysEdge = {
  __typename?: 'HolidaysEdge';
  cursor: Scalars['Base64'];
  node: Holidays;
  offset: Scalars['Int'];
};

export type JobAllocations = {
  __typename?: 'JobAllocations';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DeclineDescription?: Maybe<Scalars['String']>;
  DeclineReason?: Maybe<Scalars['String']>;
  Duration?: Maybe<Scalars['Duration']>;
  End?: Maybe<Scalars['Instant']>;
  EstimatedTravelDistance?: Maybe<Scalars['BigDecimal']>;
  EstimatedTravelTime?: Maybe<Scalars['Duration']>;
  GeoCheckedInLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoCheckedInLongitude?: Maybe<Scalars['BigDecimal']>;
  GeoCompletedLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoCompletedLongitude?: Maybe<Scalars['BigDecimal']>;
  GeoInProgressLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoInProgressLongitude?: Maybe<Scalars['BigDecimal']>;
  GeoStartTravelLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoStartTravelLongitude?: Maybe<Scalars['BigDecimal']>;
  Job: Jobs;
  JobId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  NotificationType?: Maybe<Scalars['String']>;
  PhoneResponse?: Maybe<Scalars['String']>;
  Resource: Resources;
  ResourceId: Scalars['ID'];
  ResourceRequirement?: Maybe<ResourceRequirements>;
  ResourceRequirementId?: Maybe<Scalars['ID']>;
  Start?: Maybe<Scalars['Instant']>;
  Status: Scalars['JobAllocationStatus'];
  TeamLeader: Scalars['Boolean'];
  TimeCheckedIn?: Maybe<Scalars['Instant']>;
  TimeCompleted?: Maybe<Scalars['Instant']>;
  TimeInProgress?: Maybe<Scalars['Instant']>;
  TimePublished?: Maybe<Scalars['Instant']>;
  TimeResponded?: Maybe<Scalars['Instant']>;
  TimeStartTravel?: Maybe<Scalars['Instant']>;
  TravelDistance?: Maybe<Scalars['BigDecimal']>;
  TravelTime?: Maybe<Scalars['Duration']>;
  UID: Scalars['ID'];
};

export type JobAllocationsConnection = {
  __typename?: 'JobAllocationsConnection';
  edges: Array<JobAllocationsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type JobAllocationsEdge = {
  __typename?: 'JobAllocationsEdge';
  cursor: Scalars['Base64'];
  node: JobAllocations;
  offset: Scalars['Int'];
};

export type JobDependencies = {
  __typename?: 'JobDependencies';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  FromAnchor: Scalars['JobDependencyAnchor'];
  FromJob: Jobs;
  FromJobId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ToAnchor: Scalars['JobDependencyAnchor'];
  ToAnchorMaxOffsetMinutes?: Maybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: Maybe<Scalars['Int']>;
  ToJob: Jobs;
  ToJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type JobDependenciesConnection = {
  __typename?: 'JobDependenciesConnection';
  edges: Array<JobDependenciesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type JobDependenciesEdge = {
  __typename?: 'JobDependenciesEdge';
  cursor: Scalars['Base64'];
  node: JobDependencies;
  offset: Scalars['Int'];
};

export type JobOffers = {
  __typename?: 'JobOffers';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedByResource: Scalars['Boolean'];
  CreatedDate: Scalars['Instant'];
  Job: Jobs;
  JobId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceJobOffers: Array<ResourceJobOffers>;
  ResourceRequirement?: Maybe<ResourceRequirements>;
  ResourceRequirementId?: Maybe<Scalars['ID']>;
  Status: Scalars['OfferStatus'];
  UID: Scalars['ID'];
};


export type JobOffersResourceJobOffersArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceJobOffers']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceJobOffers']>;
};

export type JobOffersConnection = {
  __typename?: 'JobOffersConnection';
  edges: Array<JobOffersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type JobOffersEdge = {
  __typename?: 'JobOffersEdge';
  cursor: Scalars['Base64'];
  node: JobOffers;
  offset: Scalars['Int'];
};

export type JobProducts = {
  __typename?: 'JobProducts';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Job: Jobs;
  JobId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Product?: Maybe<Products>;
  ProductId?: Maybe<Scalars['ID']>;
  ProductName?: Maybe<Scalars['String']>;
  Qty: Scalars['BigDecimal'];
  UID: Scalars['ID'];
};

export type JobProductsConnection = {
  __typename?: 'JobProductsConnection';
  edges: Array<JobProductsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type JobProductsEdge = {
  __typename?: 'JobProductsEdge';
  cursor: Scalars['Base64'];
  node: JobProducts;
  offset: Scalars['Int'];
};

export type JobTags = {
  __typename?: 'JobTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Job: Jobs;
  JobId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  Tag: Tags;
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type JobTagsConnection = {
  __typename?: 'JobTagsConnection';
  edges: Array<JobTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type JobTagsEdge = {
  __typename?: 'JobTagsEdge';
  cursor: Scalars['Base64'];
  node: JobTags;
  offset: Scalars['Int'];
};

export type JobTasks = {
  __typename?: 'JobTasks';
  Completed: Scalars['Boolean'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Job: Jobs;
  JobId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Seq: Scalars['Int'];
  UID: Scalars['ID'];
};

export type JobTasksConnection = {
  __typename?: 'JobTasksConnection';
  edges: Array<JobTasksEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type JobTasksEdge = {
  __typename?: 'JobTasksEdge';
  cursor: Scalars['Base64'];
  node: JobTasks;
  offset: Scalars['Int'];
};

export type JobTimeConstraints = {
  __typename?: 'JobTimeConstraints';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndBefore?: Maybe<Scalars['Instant']>;
  Job: Jobs;
  JobId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  StartAfter?: Maybe<Scalars['Instant']>;
  StartBefore?: Maybe<Scalars['Instant']>;
  Type: Scalars['JobTimeConstraintType'];
  UID: Scalars['ID'];
};

export type JobTimeConstraintsConnection = {
  __typename?: 'JobTimeConstraintsConnection';
  edges: Array<JobTimeConstraintsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type JobTimeConstraintsEdge = {
  __typename?: 'JobTimeConstraintsEdge';
  cursor: Scalars['Base64'];
  node: JobTimeConstraints;
  offset: Scalars['Int'];
};

export type Jobs = {
  __typename?: 'Jobs';
  AbortReason?: Maybe<Scalars['String']>;
  Account?: Maybe<Accounts>;
  AccountId?: Maybe<Scalars['ID']>;
  ActualEnd?: Maybe<Scalars['Instant']>;
  ActualStart?: Maybe<Scalars['Instant']>;
  Address?: Maybe<Scalars['String']>;
  Attendees: Array<Attendees>;
  AuthorizationService?: Maybe<ClientAuthorizationServices>;
  AuthorizationServiceId?: Maybe<Scalars['ID']>;
  AuthorizedHoursPerWeek?: Maybe<Scalars['BigDecimal']>;
  AutoSchedule: Scalars['Boolean'];
  CanBeDeclined: Scalars['Boolean'];
  ClearOfExceptions: Scalars['Boolean'];
  ClientAuthorization?: Maybe<ClientAuthorization>;
  ClientAuthorizationId?: Maybe<Scalars['ID']>;
  CompletionNotes?: Maybe<Scalars['String']>;
  Contact?: Maybe<Contacts>;
  ContactId?: Maybe<Scalars['ID']>;
  CopiedFrom?: Maybe<Jobs>;
  CopiedFromId?: Maybe<Scalars['ID']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  CustomerConfirmationStatus?: Maybe<Scalars['CustomerConfirmationStatus']>;
  Description?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  End?: Maybe<Scalars['Instant']>;
  EstimatedEnd?: Maybe<Scalars['Instant']>;
  EstimatedStart?: Maybe<Scalars['Instant']>;
  FamilyAgreedUpon?: Maybe<Scalars['BigDecimal']>;
  FollowupReason?: Maybe<Scalars['String']>;
  Followups: Array<Jobs>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  IsGroupEvent: Scalars['Boolean'];
  JobAllocationCount: Scalars['Int'];
  JobAllocationTimeSource: Scalars['Boolean'];
  JobAllocations: Array<JobAllocations>;
  JobDependenciesFrom: Array<JobDependencies>;
  JobDependenciesTo: Array<JobDependencies>;
  JobOffers: Array<JobOffers>;
  JobProducts: Array<JobProducts>;
  JobStatus: Scalars['JobStatus'];
  JobTags: Array<JobTags>;
  JobTasks: Array<JobTasks>;
  JobTimeConstraints: Array<JobTimeConstraints>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Location?: Maybe<Locations>;
  LocationId?: Maybe<Scalars['ID']>;
  LocationType?: Maybe<Scalars['String']>;
  Locked: Scalars['Boolean'];
  MaxAttendees?: Maybe<Scalars['Int']>;
  MinAttendees?: Maybe<Scalars['Int']>;
  Name: Scalars['String'];
  NotesComments?: Maybe<Scalars['String']>;
  NotifyBy?: Maybe<Scalars['Instant']>;
  NotifyPeriod?: Maybe<Scalars['Int']>;
  Parent?: Maybe<Jobs>;
  ParentId?: Maybe<Scalars['ID']>;
  Quantity?: Maybe<Scalars['Int']>;
  RecurringSchedule?: Maybe<RecurringSchedules>;
  RecurringScheduleId?: Maybe<Scalars['ID']>;
  Region: Regions;
  RegionId: Scalars['ID'];
  ResourceRequirements: Array<ResourceRequirements>;
  ScheduleTemplate?: Maybe<ScheduleTemplates>;
  ScheduleTemplateId?: Maybe<Scalars['ID']>;
  Start?: Maybe<Scalars['Instant']>;
  TemplatedJob?: Maybe<TemplatedJobs>;
  TemplatedJobId?: Maybe<Scalars['ID']>;
  Timezone: Scalars['String'];
  TotalAuthorizedServiceHours?: Maybe<Scalars['BigDecimal']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
  Urgency?: Maybe<Scalars['String']>;
  VirtualMeetingId?: Maybe<Scalars['String']>;
  VirtualMeetingInfo?: Maybe<Scalars['String']>;
  VirtualMeetingURL?: Maybe<Scalars['String']>;
};


export type JobsAttendeesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAttendees']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAttendees']>;
};


export type JobsFollowupsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']>;
};


export type JobsJobAllocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobAllocations']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobAllocations']>;
};


export type JobsJobDependenciesFromArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobDependencies']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobDependencies']>;
};


export type JobsJobDependenciesToArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobDependencies']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobDependencies']>;
};


export type JobsJobOffersArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobOffers']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobOffers']>;
};


export type JobsJobProductsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobProducts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobProducts']>;
};


export type JobsJobTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobTags']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobTags']>;
};


export type JobsJobTasksArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobTasks']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobTasks']>;
};


export type JobsJobTimeConstraintsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobTimeConstraints']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobTimeConstraints']>;
};


export type JobsResourceRequirementsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceRequirements']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceRequirements']>;
};

export type JobsConnection = {
  __typename?: 'JobsConnection';
  edges: Array<JobsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type JobsEdge = {
  __typename?: 'JobsEdge';
  cursor: Scalars['Base64'];
  node: Jobs;
  offset: Scalars['Int'];
};

export type LocationResourceScores = {
  __typename?: 'LocationResourceScores';
  Blacklisted: Scalars['Boolean'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Location: Locations;
  LocationId: Scalars['ID'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  UID: Scalars['ID'];
  Whitelisted: Scalars['Boolean'];
};

export type LocationResourceScoresConnection = {
  __typename?: 'LocationResourceScoresConnection';
  edges: Array<LocationResourceScoresEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LocationResourceScoresEdge = {
  __typename?: 'LocationResourceScoresEdge';
  cursor: Scalars['Base64'];
  node: LocationResourceScores;
  offset: Scalars['Int'];
};

export type Locations = {
  __typename?: 'Locations';
  Account?: Maybe<Accounts>;
  AccountId?: Maybe<Scalars['ID']>;
  Activities: Array<Activities>;
  Address?: Maybe<Scalars['String']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Default?: Maybe<Scalars['Boolean']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  Jobs: Array<Jobs>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Region?: Maybe<Regions>;
  RegionId?: Maybe<Scalars['ID']>;
  RequiresWhitelist: Scalars['Boolean'];
  ResourceScores: Array<LocationResourceScores>;
  Shifts: Array<Shifts>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};


export type LocationsActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterActivities']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivities']>;
};


export type LocationsJobsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']>;
};


export type LocationsResourceScoresArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterLocationResourceScores']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseLocationResourceScores']>;
};


export type LocationsShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterShifts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShifts']>;
};

export type LocationsConnection = {
  __typename?: 'LocationsConnection';
  edges: Array<LocationsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LocationsEdge = {
  __typename?: 'LocationsEdge';
  cursor: Scalars['Base64'];
  node: Locations;
  offset: Scalars['Int'];
};

export type Logger = {
  __typename?: 'Logger';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Message?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type LoggerConnection = {
  __typename?: 'LoggerConnection';
  edges: Array<LoggerEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LoggerEdge = {
  __typename?: 'LoggerEdge';
  cursor: Scalars['Base64'];
  node: Logger;
  offset: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  schema: SchemaMutation;
};

export type NewAccountResourceScores = {
  AccountId: Scalars['ID'];
  Blacklisted?: InputMaybe<Scalars['Boolean']>;
  ResourceId: Scalars['ID'];
  Whitelisted?: InputMaybe<Scalars['Boolean']>;
};

export type NewAccountTags = {
  AccountId: Scalars['ID'];
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type NewAccounts = {
  ACId?: InputMaybe<Scalars['ID']>;
  AVPId?: InputMaybe<Scalars['ID']>;
  ActiveFromDate?: InputMaybe<Scalars['LocalDate']>;
  ActiveThruDate?: InputMaybe<Scalars['LocalDate']>;
  ActualStartOfCareDate?: InputMaybe<Scalars['LocalDate']>;
  BillingCity?: InputMaybe<Scalars['String']>;
  BillingPostalCode?: InputMaybe<Scalars['String']>;
  BillingState?: InputMaybe<Scalars['String']>;
  BillingStreet?: InputMaybe<Scalars['String']>;
  CaseID?: InputMaybe<Scalars['String']>;
  CaseProgressionStatus?: InputMaybe<Scalars['String']>;
  DateOfBirth?: InputMaybe<Scalars['LocalDate']>;
  DefaultLocationId?: InputMaybe<Scalars['ID']>;
  DischargeDate?: InputMaybe<Scalars['Instant']>;
  Division?: InputMaybe<Scalars['String']>;
  ExternalClientID?: InputMaybe<Scalars['String']>;
  FSMId?: InputMaybe<Scalars['ID']>;
  Fax?: InputMaybe<Scalars['String']>;
  Gender?: InputMaybe<Scalars['String']>;
  HoldDate?: InputMaybe<Scalars['LocalDate']>;
  MRNumber?: InputMaybe<Scalars['String']>;
  Name: Scalars['String'];
  NeedToRecalculateJobsLocation?: InputMaybe<Scalars['Boolean']>;
  ODId?: InputMaybe<Scalars['ID']>;
  PayerLabel?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  PlannedStartOfCareDate?: InputMaybe<Scalars['LocalDate']>;
  PreferredTechnician?: InputMaybe<Scalars['String']>;
  RCDId?: InputMaybe<Scalars['ID']>;
  Rank?: InputMaybe<Scalars['BigDecimal']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  RequiresWhitelist?: InputMaybe<Scalars['Boolean']>;
  ResumeServiceDate?: InputMaybe<Scalars['LocalDate']>;
  SCId?: InputMaybe<Scalars['ID']>;
  ShippingCity?: InputMaybe<Scalars['String']>;
  ShippingPostalCode?: InputMaybe<Scalars['String']>;
  ShippingState?: InputMaybe<Scalars['String']>;
  ShippingStreet?: InputMaybe<Scalars['String']>;
  Status?: InputMaybe<Scalars['String']>;
};

export type NewActivities = {
  Address?: InputMaybe<Scalars['String']>;
  CopiedFromId?: InputMaybe<Scalars['ID']>;
  End: Scalars['Instant'];
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Notes?: InputMaybe<Scalars['String']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  TemplatedActivityId?: InputMaybe<Scalars['ID']>;
  Timezone?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Scalars['String']>;
};

export type NewActivityResources = {
  ActivityId: Scalars['ID'];
  ResourceId: Scalars['ID'];
};

export type NewAdminSetting = {
  AllDayEndTime?: InputMaybe<Scalars['String']>;
  AllDayStartTime?: InputMaybe<Scalars['String']>;
  ReadOnlyAvailabilityForm?: InputMaybe<Scalars['Boolean']>;
};

export type NewAttendees = {
  CancelReason?: InputMaybe<Scalars['String']>;
  ContactId: Scalars['ID'];
  JobId: Scalars['ID'];
  Status?: InputMaybe<Scalars['AttendeeStatus']>;
  TimeCancelled?: InputMaybe<Scalars['Instant']>;
};

export type NewAvailabilities = {
  Finish: Scalars['Instant'];
  IsAvailable?: InputMaybe<Scalars['Boolean']>;
  Notes?: InputMaybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  Status?: InputMaybe<Scalars['AvailabilityStatus']>;
  Type?: InputMaybe<Scalars['String']>;
};

export type NewAvailabilityPatternResources = {
  AvailabilityPatternId: Scalars['ID'];
  End?: InputMaybe<Scalars['Instant']>;
  RepeatEvery?: InputMaybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  Status?: InputMaybe<Scalars['AvailabilityStatus']>;
};

export type NewAvailabilityPatterns = {
  Description?: InputMaybe<Scalars['String']>;
  Hash: Scalars['String'];
  Name: Scalars['String'];
  Pattern: Scalars['String'];
};

export type NewAvailabilityTemplateEntries = {
  AvailabilityTemplateId: Scalars['ID'];
  FinishTime: Scalars['Int'];
  IsAvailable?: InputMaybe<Scalars['Boolean']>;
  StartTime: Scalars['Int'];
  Weekday: Scalars['Weekday'];
};

export type NewAvailabilityTemplateResources = {
  AvailabilityTemplateId: Scalars['ID'];
  Migrated?: InputMaybe<Scalars['Boolean']>;
  ResourceId: Scalars['ID'];
};

export type NewAvailabilityTemplates = {
  AvailabilityPatternId?: InputMaybe<Scalars['ID']>;
  Finish?: InputMaybe<Scalars['LocalDate']>;
  Global?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
  RepeatEvery?: InputMaybe<Scalars['String']>;
  Start?: InputMaybe<Scalars['LocalDate']>;
};

export type NewClientAuthorization = {
  AccountId?: InputMaybe<Scalars['ID']>;
  AuthorizationEffectiveDate?: InputMaybe<Scalars['LocalDate']>;
  AuthorizationExpirationDate?: InputMaybe<Scalars['LocalDate']>;
  AuthorizationNotes?: InputMaybe<Scalars['String']>;
  AuthorizationStatus?: InputMaybe<Scalars['String']>;
  CaseProgressionStatus?: InputMaybe<Scalars['String']>;
  DummyTestingField?: InputMaybe<Scalars['BigDecimal']>;
  ExternalID?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  TotalAuthorizedHours?: InputMaybe<Scalars['BigDecimal']>;
  TotalScheduledAuthorizedHours?: InputMaybe<Scalars['BigDecimal']>;
  TotalUsedAuthorizedHours?: InputMaybe<Scalars['BigDecimal']>;
};

export type NewClientAuthorizationServices = {
  AuthorizedHoursPerWeek?: InputMaybe<Scalars['BigDecimal']>;
  ClientAuthorizationId?: InputMaybe<Scalars['ID']>;
  DummyField?: InputMaybe<Scalars['BigDecimal']>;
  ExternalID?: InputMaybe<Scalars['String']>;
  FamilyAgreedUpon?: InputMaybe<Scalars['BigDecimal']>;
  HoursRemainingAfterChargeCreation?: InputMaybe<Scalars['BigDecimal']>;
  Name?: InputMaybe<Scalars['String']>;
  ServiceType?: InputMaybe<Scalars['String']>;
  TotalAuthorizedServiceHours?: InputMaybe<Scalars['BigDecimal']>;
  TotalScheduledServiceHours?: InputMaybe<Scalars['BigDecimal']>;
  TotalUsedServiceHours?: InputMaybe<Scalars['BigDecimal']>;
};

export type NewClientAvailabilities = {
  AccountId?: InputMaybe<Scalars['ID']>;
  ContactId?: InputMaybe<Scalars['ID']>;
  End: Scalars['Instant'];
  IsAvailable?: InputMaybe<Scalars['Boolean']>;
  PreferredEnd?: InputMaybe<Scalars['Instant']>;
  PreferredStart?: InputMaybe<Scalars['Instant']>;
  RecurringScheduleId?: InputMaybe<Scalars['ID']>;
  Start: Scalars['Instant'];
};

export type NewClientAvailabilityTemplate = {
  AccountId?: InputMaybe<Scalars['ID']>;
  AdjustmentType?: InputMaybe<Scalars['String']>;
  AllDay?: InputMaybe<Scalars['Boolean']>;
  DatesOfMonth?: InputMaybe<Array<Scalars['String']>>;
  DaysOfMonth?: InputMaybe<Array<Scalars['String']>>;
  DaysOfWeek?: InputMaybe<Scalars['String']>;
  DaysOfYear?: InputMaybe<Scalars['String']>;
  EndDate?: InputMaybe<Scalars['LocalDate']>;
  EndTime?: InputMaybe<Scalars['LocalTime']>;
  Label?: InputMaybe<Scalars['String']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  MonthsOfYear?: InputMaybe<Array<Scalars['String']>>;
  Note?: InputMaybe<Scalars['String']>;
  Pattern?: InputMaybe<Scalars['String']>;
  StartDate?: InputMaybe<Scalars['LocalDate']>;
  StartTime?: InputMaybe<Scalars['LocalTime']>;
  Type?: InputMaybe<Scalars['String']>;
};

export type NewContactTags = {
  ContactId: Scalars['ID'];
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type NewContacts = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Email?: InputMaybe<Scalars['String']>;
  FirstName?: InputMaybe<Scalars['String']>;
  LastName: Scalars['String'];
  MailingCity?: InputMaybe<Scalars['String']>;
  MailingPostalCode?: InputMaybe<Scalars['String']>;
  MailingState?: InputMaybe<Scalars['String']>;
  MailingStreet?: InputMaybe<Scalars['String']>;
  MobilePhone?: InputMaybe<Scalars['String']>;
  OtherCity?: InputMaybe<Scalars['String']>;
  OtherPostalCode?: InputMaybe<Scalars['String']>;
  OtherState?: InputMaybe<Scalars['String']>;
  OtherStreet?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  Title?: InputMaybe<Scalars['String']>;
};

export type NewExceptionRecord = {
  ExceptionId?: InputMaybe<Scalars['String']>;
  RuleId?: InputMaybe<Scalars['String']>;
  SourceId?: InputMaybe<Scalars['String']>;
  SourceType?: InputMaybe<Scalars['String']>;
  TargetId?: InputMaybe<Scalars['String']>;
  TargetType?: InputMaybe<Scalars['String']>;
};

export type NewExceptionType = {
  Description?: InputMaybe<Scalars['String']>;
  DescriptionTwo?: InputMaybe<Scalars['String']>;
  ExceptionType: Scalars['String'];
  ExceptionType2: Scalars['String'];
  Name?: InputMaybe<Scalars['String']>;
};

export type NewHolidayRegions = {
  HolidayId: Scalars['ID'];
  RegionId: Scalars['ID'];
};

export type NewHolidays = {
  EndDate: Scalars['LocalDate'];
  Global?: InputMaybe<Scalars['Boolean']>;
  Name: Scalars['String'];
  StartDate: Scalars['LocalDate'];
};

export type NewJobAllocations = {
  DeclineDescription?: InputMaybe<Scalars['String']>;
  DeclineReason?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  End?: InputMaybe<Scalars['Instant']>;
  EstimatedTravelDistance?: InputMaybe<Scalars['BigDecimal']>;
  EstimatedTravelTime?: InputMaybe<Scalars['Duration']>;
  GeoCheckedInLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoCheckedInLongitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoCompletedLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoCompletedLongitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoInProgressLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoInProgressLongitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoStartTravelLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoStartTravelLongitude?: InputMaybe<Scalars['BigDecimal']>;
  JobId: Scalars['ID'];
  NotificationType?: InputMaybe<Scalars['String']>;
  PhoneResponse?: InputMaybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  ResourceRequirementId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  Status?: InputMaybe<Scalars['JobAllocationStatus']>;
  TeamLeader?: InputMaybe<Scalars['Boolean']>;
  TimeCheckedIn?: InputMaybe<Scalars['Instant']>;
  TimeCompleted?: InputMaybe<Scalars['Instant']>;
  TimeInProgress?: InputMaybe<Scalars['Instant']>;
  TimePublished?: InputMaybe<Scalars['Instant']>;
  TimeResponded?: InputMaybe<Scalars['Instant']>;
  TimeStartTravel?: InputMaybe<Scalars['Instant']>;
  TravelDistance?: InputMaybe<Scalars['BigDecimal']>;
  TravelTime?: InputMaybe<Scalars['Duration']>;
};

export type NewJobDependencies = {
  FromAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  FromJobId: Scalars['ID'];
  ToAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  ToAnchorMaxOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToJobId: Scalars['ID'];
};

export type NewJobOffers = {
  CreatedByResource?: InputMaybe<Scalars['Boolean']>;
  JobId: Scalars['ID'];
  ResourceRequirementId?: InputMaybe<Scalars['ID']>;
  Status?: InputMaybe<Scalars['OfferStatus']>;
};

export type NewJobProducts = {
  JobId: Scalars['ID'];
  ProductId?: InputMaybe<Scalars['ID']>;
  Qty: Scalars['BigDecimal'];
};

export type NewJobTags = {
  JobId: Scalars['ID'];
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type NewJobTasks = {
  Completed?: InputMaybe<Scalars['Boolean']>;
  Description?: InputMaybe<Scalars['String']>;
  JobId: Scalars['ID'];
  Name: Scalars['String'];
  Seq: Scalars['Int'];
};

export type NewJobTimeConstraints = {
  EndBefore?: InputMaybe<Scalars['Instant']>;
  JobId: Scalars['ID'];
  Required?: InputMaybe<Scalars['Boolean']>;
  StartAfter?: InputMaybe<Scalars['Instant']>;
  StartBefore?: InputMaybe<Scalars['Instant']>;
  Type?: InputMaybe<Scalars['JobTimeConstraintType']>;
};

export type NewJobs = {
  AbortReason?: InputMaybe<Scalars['String']>;
  AccountId?: InputMaybe<Scalars['ID']>;
  ActualEnd?: InputMaybe<Scalars['Instant']>;
  ActualStart?: InputMaybe<Scalars['Instant']>;
  Address?: InputMaybe<Scalars['String']>;
  AuthorizationServiceId?: InputMaybe<Scalars['ID']>;
  AuthorizedHoursPerWeek?: InputMaybe<Scalars['BigDecimal']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']>;
  CanBeDeclined?: InputMaybe<Scalars['Boolean']>;
  ClearOfExceptions?: InputMaybe<Scalars['Boolean']>;
  ClientAuthorizationId?: InputMaybe<Scalars['ID']>;
  CompletionNotes?: InputMaybe<Scalars['String']>;
  ContactId?: InputMaybe<Scalars['ID']>;
  CopiedFromId?: InputMaybe<Scalars['ID']>;
  CustomerConfirmationStatus?: InputMaybe<Scalars['CustomerConfirmationStatus']>;
  Description?: InputMaybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  End?: InputMaybe<Scalars['Instant']>;
  EstimatedEnd?: InputMaybe<Scalars['Instant']>;
  EstimatedStart?: InputMaybe<Scalars['Instant']>;
  FamilyAgreedUpon?: InputMaybe<Scalars['BigDecimal']>;
  FollowupReason?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  IsGroupEvent?: InputMaybe<Scalars['Boolean']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  JobStatus?: InputMaybe<Scalars['JobStatus']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  LocationType?: InputMaybe<Scalars['String']>;
  Locked?: InputMaybe<Scalars['Boolean']>;
  MaxAttendees?: InputMaybe<Scalars['Int']>;
  MinAttendees?: InputMaybe<Scalars['Int']>;
  Name?: InputMaybe<Scalars['String']>;
  NotesComments?: InputMaybe<Scalars['String']>;
  NotifyBy?: InputMaybe<Scalars['Instant']>;
  NotifyPeriod?: InputMaybe<Scalars['Int']>;
  ParentId?: InputMaybe<Scalars['ID']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  RecurringScheduleId?: InputMaybe<Scalars['ID']>;
  RegionId: Scalars['ID'];
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']>;
  TotalAuthorizedServiceHours?: InputMaybe<Scalars['BigDecimal']>;
  Type?: InputMaybe<Scalars['String']>;
  Urgency?: InputMaybe<Scalars['String']>;
  VirtualMeetingId?: InputMaybe<Scalars['String']>;
  VirtualMeetingInfo?: InputMaybe<Scalars['String']>;
  VirtualMeetingURL?: InputMaybe<Scalars['String']>;
};

export type NewLocationResourceScores = {
  Blacklisted?: InputMaybe<Scalars['Boolean']>;
  LocationId: Scalars['ID'];
  ResourceId: Scalars['ID'];
  Whitelisted?: InputMaybe<Scalars['Boolean']>;
};

export type NewLocations = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Address?: InputMaybe<Scalars['String']>;
  Default?: InputMaybe<Scalars['Boolean']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  Name: Scalars['String'];
  RegionId?: InputMaybe<Scalars['ID']>;
  RequiresWhitelist?: InputMaybe<Scalars['Boolean']>;
  Type?: InputMaybe<Scalars['String']>;
};

export type NewLogger = {
  Message?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Scalars['String']>;
};

export type NewProducts = {
  Description?: InputMaybe<Scalars['String']>;
  Family?: InputMaybe<Scalars['String']>;
  IsActive?: InputMaybe<Scalars['Boolean']>;
  Name: Scalars['String'];
  ProductCode?: InputMaybe<Scalars['String']>;
};

export type NewRecurringSchedules = {
  AckAllJobs?: InputMaybe<Scalars['Boolean']>;
  Description?: InputMaybe<Scalars['String']>;
  Pattern?: InputMaybe<Scalars['String']>;
  Summary?: InputMaybe<Scalars['String']>;
};

export type NewRegions = {
  CountryCode?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  Name: Scalars['String'];
  Radius?: InputMaybe<Scalars['Int']>;
  Timezone: Scalars['String'];
};

export type NewResourceJobOffers = {
  JobOfferId: Scalars['ID'];
  ResourceId: Scalars['ID'];
  Response?: InputMaybe<Scalars['OfferResponse']>;
  Status?: InputMaybe<Scalars['ResourceOfferStatus']>;
  TimeNotified?: InputMaybe<Scalars['Instant']>;
  TimeResponded?: InputMaybe<Scalars['Instant']>;
};

export type NewResourceOverrideRegions = {
  RegionId: Scalars['ID'];
  ResourceOverrideId: Scalars['ID'];
};

export type NewResourceOverrides = {
  Description?: InputMaybe<Scalars['String']>;
  End: Scalars['Instant'];
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  HomeAddress?: InputMaybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
};

export type NewResourceRegions = {
  End?: InputMaybe<Scalars['Instant']>;
  RegionId: Scalars['ID'];
  ResourceId: Scalars['ID'];
  Start?: InputMaybe<Scalars['Instant']>;
};

export type NewResourceRequirementTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  ResourceRequirementId: Scalars['ID'];
  TagId: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type NewResourceRequirements = {
  Description?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  JobId: Scalars['ID'];
  Quantity: Scalars['Int'];
  RelativeStart?: InputMaybe<Scalars['Duration']>;
  ScheduledEnd?: InputMaybe<Scalars['Instant']>;
  ScheduledStart?: InputMaybe<Scalars['Instant']>;
  Status?: InputMaybe<Scalars['JobStatus']>;
};

export type NewResourceShiftBreaks = {
  End?: InputMaybe<Scalars['Instant']>;
  ResourceShiftId: Scalars['ID'];
  Start: Scalars['Instant'];
};

export type NewResourceShiftOffers = {
  ResourceId: Scalars['ID'];
  Response?: InputMaybe<Scalars['OfferResponse']>;
  ShiftOfferId: Scalars['ID'];
  Status?: InputMaybe<Scalars['ResourceOfferStatus']>;
  TimeNotified?: InputMaybe<Scalars['Instant']>;
  TimeResponded?: InputMaybe<Scalars['Instant']>;
};

export type NewResourceShifts = {
  ActualEnd?: InputMaybe<Scalars['Instant']>;
  ActualStart?: InputMaybe<Scalars['Instant']>;
  ResourceId: Scalars['ID'];
  ShiftId: Scalars['ID'];
};

export type NewResourceTags = {
  ExpiryDate?: InputMaybe<Scalars['Instant']>;
  ResourceId: Scalars['ID'];
  TagId: Scalars['ID'];
};

export type NewResources = {
  Alias?: InputMaybe<Scalars['String']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']>;
  CareConnectUserID?: InputMaybe<Scalars['BigDecimal']>;
  Category?: InputMaybe<Scalars['String']>;
  CountryCode?: InputMaybe<Scalars['String']>;
  EffectiveTerminationDate?: InputMaybe<Scalars['Instant']>;
  Email?: InputMaybe<Scalars['String']>;
  EmploymentType?: InputMaybe<Scalars['String']>;
  FSM?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  HomeAddress?: InputMaybe<Scalars['String']>;
  IsActive?: InputMaybe<Scalars['Boolean']>;
  MobilePhone?: InputMaybe<Scalars['String']>;
  Name: Scalars['String'];
  Notes?: InputMaybe<Scalars['String']>;
  NotificationType?: InputMaybe<Scalars['String']>;
  PrimaryPhone?: InputMaybe<Scalars['String']>;
  PrimaryRegionId: Scalars['ID'];
  Rating?: InputMaybe<Scalars['Int']>;
  ReportsTo?: InputMaybe<Scalars['String']>;
  RequestedWorkingHoursPerWeek?: InputMaybe<Scalars['BigDecimal']>;
  ResourceType?: InputMaybe<Scalars['String']>;
  TotalUtilizedHours?: InputMaybe<Scalars['String']>;
  UserId?: InputMaybe<Scalars['ID']>;
  WeeklyHours?: InputMaybe<Scalars['BigDecimal']>;
  WorkingHourType?: InputMaybe<Scalars['WorkingHourType']>;
  amsuserstatus?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  complianceissue?: InputMaybe<Scalars['String']>;
  degreetypelab?: InputMaybe<Scalars['String']>;
  estimatedactivationtimestamp?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  homephone?: InputMaybe<Scalars['String']>;
  middleInitial?: InputMaybe<Scalars['String']>;
  npi?: InputMaybe<Scalars['String']>;
  onboardingstatuslabel?: InputMaybe<Scalars['String']>;
  personalemail?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  uniqueeid?: InputMaybe<Scalars['String']>;
  worksfor?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type NewScheduleTemplates = {
  DeletedById?: InputMaybe<Scalars['ID']>;
  DeletedDate?: InputMaybe<Scalars['Instant']>;
  Description?: InputMaybe<Scalars['String']>;
  IsDeleted?: InputMaybe<Scalars['Boolean']>;
  Name: Scalars['String'];
  PeriodDays?: InputMaybe<Scalars['Int']>;
};

export type NewShiftOfferShifts = {
  ShiftId: Scalars['ID'];
  ShiftOfferId: Scalars['ID'];
};

export type NewShiftOffers = {
  Status?: InputMaybe<Scalars['OfferStatus']>;
};

export type NewShiftTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  ShiftId: Scalars['ID'];
  TagId: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type NewShifts = {
  CopiedFromId?: InputMaybe<Scalars['ID']>;
  DisplayName?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  End?: InputMaybe<Scalars['Instant']>;
  IsDraft?: InputMaybe<Scalars['Boolean']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  TemplatedShiftId?: InputMaybe<Scalars['ID']>;
};

export type NewStarterTest = {
  ResourceId: Scalars['ID'];
  StarterTestBooleanField?: InputMaybe<Scalars['Boolean']>;
  StarterTestDecimalField?: InputMaybe<Scalars['BigDecimal']>;
  StarterTestPicklistField?: InputMaybe<Scalars['String']>;
};

export type NewTagManagerSettings = {
  ExpiredReminder?: InputMaybe<Scalars['Boolean']>;
  ExpiredReminderTemplate?: InputMaybe<Scalars['String']>;
  ExpiringSoonReminderDays?: InputMaybe<Scalars['BigDecimal']>;
  ExpiringSoonReminderEnabled?: InputMaybe<Scalars['Boolean']>;
  ExpiringSoonReminderTemplate?: InputMaybe<Scalars['String']>;
  LongLiveToken?: InputMaybe<Scalars['String']>;
  NotifyExpiringTagOffset1?: InputMaybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset2?: InputMaybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset3?: InputMaybe<Scalars['BigDecimal']>;
  ReminderSendTime?: InputMaybe<Scalars['BigDecimal']>;
  ReminderTimezone?: InputMaybe<Scalars['String']>;
  RemindersEnabled?: InputMaybe<Scalars['Boolean']>;
};

export type NewTagRequest = {
  IsRenewal?: InputMaybe<Scalars['Boolean']>;
  NewExpiryDate?: InputMaybe<Scalars['LocalDate']>;
  OldExpiryDate?: InputMaybe<Scalars['LocalDate']>;
  ResourceId: Scalars['ID'];
  Status?: InputMaybe<Scalars['String']>;
  TagAssignmentId?: InputMaybe<Scalars['ID']>;
  TagId?: InputMaybe<Scalars['ID']>;
  TagName?: InputMaybe<Scalars['String']>;
};

export type NewTags = {
  Classification?: InputMaybe<Scalars['TagClassification']>;
  Groups?: InputMaybe<Array<Scalars['String']>>;
  IsRequestable?: InputMaybe<Scalars['Boolean']>;
  Name: Scalars['String'];
  NotVisibleToResources?: InputMaybe<Scalars['Boolean']>;
  RequestEvidence?: InputMaybe<Scalars['Boolean']>;
  RequiresExpiryDate?: InputMaybe<Scalars['Boolean']>;
  Type?: InputMaybe<Scalars['String']>;
};

export type NewTemplatedActivities = {
  Address?: InputMaybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Notes?: InputMaybe<Scalars['String']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  Timezone: Scalars['String'];
  Type?: InputMaybe<Scalars['String']>;
};

export type NewTemplatedActivityResources = {
  ResourceId: Scalars['ID'];
  TemplatedActivityId: Scalars['ID'];
};

export type NewTemplatedAttendees = {
  ContactId: Scalars['ID'];
  TemplatedJobId: Scalars['ID'];
};

export type NewTemplatedJobAllocations = {
  Duration?: InputMaybe<Scalars['Duration']>;
  NotificationType?: InputMaybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  StartOffsetDays?: InputMaybe<Scalars['Int']>;
  StartTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  Status?: InputMaybe<Scalars['JobAllocationStatus']>;
  TeamLeader?: InputMaybe<Scalars['Boolean']>;
  TemplatedJobId: Scalars['ID'];
  TemplatedResourceRequirementId?: InputMaybe<Scalars['ID']>;
};

export type NewTemplatedJobDependencies = {
  FromAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  FromTemplatedJobId: Scalars['ID'];
  ToAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  ToAnchorMaxOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToTemplatedJobId: Scalars['ID'];
};

export type NewTemplatedJobProducts = {
  ProductId?: InputMaybe<Scalars['ID']>;
  Qty: Scalars['BigDecimal'];
  TemplatedJobId: Scalars['ID'];
};

export type NewTemplatedJobTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  TemplatedJobId: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type NewTemplatedJobTasks = {
  Completed?: InputMaybe<Scalars['Boolean']>;
  Description?: InputMaybe<Scalars['String']>;
  Name: Scalars['String'];
  Seq: Scalars['Int'];
  TemplatedJobId: Scalars['ID'];
};

export type NewTemplatedJobTimeConstraints = {
  EndBeforeOffsetDays?: InputMaybe<Scalars['Int']>;
  EndBeforeTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  Required?: InputMaybe<Scalars['Boolean']>;
  StartAfterOffsetDays?: InputMaybe<Scalars['Int']>;
  StartAfterTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  StartBeforeOffsetDays?: InputMaybe<Scalars['Int']>;
  StartBeforeTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  TemplatedJobId: Scalars['ID'];
  Type: Scalars['JobTimeConstraintType'];
};

export type NewTemplatedJobs = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Address?: InputMaybe<Scalars['String']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']>;
  CanBeDeclined?: InputMaybe<Scalars['Boolean']>;
  ContactId?: InputMaybe<Scalars['ID']>;
  CustomerConfirmationStatus?: InputMaybe<Scalars['CustomerConfirmationStatus']>;
  Description?: InputMaybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  IsGroupEvent?: InputMaybe<Scalars['Boolean']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Locked?: InputMaybe<Scalars['Boolean']>;
  MaxAttendees?: InputMaybe<Scalars['Int']>;
  MinAttendees?: InputMaybe<Scalars['Int']>;
  NotesComments?: InputMaybe<Scalars['String']>;
  NotifyPeriod?: InputMaybe<Scalars['Int']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  RegionId: Scalars['ID'];
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  Type?: InputMaybe<Scalars['String']>;
  Urgency?: InputMaybe<Scalars['String']>;
  VirtualMeetingId?: InputMaybe<Scalars['String']>;
  VirtualMeetingInfo?: InputMaybe<Scalars['String']>;
  VirtualMeetingURL?: InputMaybe<Scalars['String']>;
};

export type NewTemplatedResourceRequirementTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  TemplatedResourceRequirementId: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type NewTemplatedResourceRequirements = {
  Description?: InputMaybe<Scalars['String']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  Quantity: Scalars['Int'];
  RelativeStart?: InputMaybe<Scalars['Duration']>;
  TemplatedJobId: Scalars['ID'];
};

export type NewTemplatedResourceShifts = {
  ResourceId: Scalars['ID'];
  TemplatedShiftId: Scalars['ID'];
};

export type NewTemplatedShiftTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  TemplatedShiftId: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type NewTemplatedShifts = {
  DisplayName?: InputMaybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  IsDraft?: InputMaybe<Scalars['Boolean']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  RegionId: Scalars['ID'];
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
};

export type NewUserRegions = {
  RegionId: Scalars['ID'];
  UserId: Scalars['ID'];
};

export type NewUser_Ext = {
  CareConnectUserID?: InputMaybe<Scalars['String']>;
  uniqueeid?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type NewclientAvailabilityTemplateEntry = {
  AllDay?: InputMaybe<Scalars['Boolean']>;
  ClientAvailabilityTemplateId?: InputMaybe<Scalars['ID']>;
  EndTime?: InputMaybe<Scalars['LocalTime']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
  StartTime?: InputMaybe<Scalars['LocalTime']>;
  Weekday?: InputMaybe<Scalars['String']>;
};

export type Newsked_BroadcastRecipients = {
  sked_BroadcastId: Scalars['ID'];
  sked_ContactId?: InputMaybe<Scalars['ID']>;
  sked_Date?: InputMaybe<Scalars['LocalDate']>;
  sked_ErrorInformation?: InputMaybe<Scalars['String']>;
  sked_NotificationMethod?: InputMaybe<Scalars['String']>;
  sked_Phone?: InputMaybe<Scalars['String']>;
  sked_ResourceId?: InputMaybe<Scalars['ID']>;
  sked_Status?: InputMaybe<Scalars['String']>;
  sked_Timestamp?: InputMaybe<Scalars['String']>;
};

export type Newsked_Broadcasts = {
  sked_Broadcast?: InputMaybe<Scalars['String']>;
  sked_Date?: InputMaybe<Scalars['LocalDate']>;
  sked_NotSent?: InputMaybe<Scalars['BigDecimal']>;
  sked_NotificationMethod?: InputMaybe<Scalars['String']>;
  sked_RecipientType?: InputMaybe<Scalars['String']>;
  sked_Sent?: InputMaybe<Scalars['BigDecimal']>;
  sked_Timestamp?: InputMaybe<Scalars['String']>;
  sked_TotalRecipients?: InputMaybe<Scalars['BigDecimal']>;
};

/**
 * Notification that links to the actual object the notification refers to. See the `notifications` query for
 * an example on how to use this type in a query.
 */
export type Notifications = {
  __typename?: 'Notifications';
  /** Name of the action that triggered the notification */
  Action: Scalars['String'];
  /** Object the notification refers to as a union type */
  Object: NotificationsObject;
  /** Creation time as a UTC timestamp */
  Timestamp: Scalars['Instant'];
};

/** Possible object types a `Notifications` object can refer to */
export type NotificationsObject = Jobs | ResourceJobOffers | ResourceShiftOffers | Shifts;

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Base64']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Base64']>;
};

export type Products = {
  __typename?: 'Products';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Family?: Maybe<Scalars['String']>;
  IsActive: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  ProductCode?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  edges: Array<ProductsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProductsEdge = {
  __typename?: 'ProductsEdge';
  cursor: Scalars['Base64'];
  node: Products;
  offset: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  accountResourceScores: AccountResourceScoresConnection;
  accountResourceScoresById?: Maybe<AccountResourceScores>;
  accountTags: AccountTagsConnection;
  accountTagsById?: Maybe<AccountTags>;
  accounts: AccountsConnection;
  accountsById?: Maybe<Accounts>;
  activities: ActivitiesConnection;
  activitiesById?: Maybe<Activities>;
  activityResources: ActivityResourcesConnection;
  activityResourcesById?: Maybe<ActivityResources>;
  adminSetting: AdminSettingConnection;
  adminSettingById?: Maybe<AdminSetting>;
  attendees: AttendeesConnection;
  attendeesById?: Maybe<Attendees>;
  availabilities: AvailabilitiesConnection;
  availabilitiesById?: Maybe<Availabilities>;
  availabilityPatternResources: AvailabilityPatternResourcesConnection;
  availabilityPatternResourcesById?: Maybe<AvailabilityPatternResources>;
  availabilityPatterns: AvailabilityPatternsConnection;
  availabilityPatternsById?: Maybe<AvailabilityPatterns>;
  availabilityTemplateEntries: AvailabilityTemplateEntriesConnection;
  availabilityTemplateEntriesById?: Maybe<AvailabilityTemplateEntries>;
  availabilityTemplateResources: AvailabilityTemplateResourcesConnection;
  availabilityTemplateResourcesById?: Maybe<AvailabilityTemplateResources>;
  availabilityTemplates: AvailabilityTemplatesConnection;
  availabilityTemplatesById?: Maybe<AvailabilityTemplates>;
  clientAuthorization: ClientAuthorizationConnection;
  clientAuthorizationById?: Maybe<ClientAuthorization>;
  clientAuthorizationServices: ClientAuthorizationServicesConnection;
  clientAuthorizationServicesById?: Maybe<ClientAuthorizationServices>;
  clientAvailabilities: ClientAvailabilitiesConnection;
  clientAvailabilitiesById?: Maybe<ClientAvailabilities>;
  clientAvailabilityTemplate: ClientAvailabilityTemplateConnection;
  clientAvailabilityTemplateById?: Maybe<ClientAvailabilityTemplate>;
  clientAvailabilityTemplateEntry: ClientAvailabilityTemplateEntryConnection;
  clientAvailabilityTemplateEntryById?: Maybe<ClientAvailabilityTemplateEntry>;
  contactTags: ContactTagsConnection;
  contactTagsById?: Maybe<ContactTags>;
  contacts: ContactsConnection;
  contactsById?: Maybe<Contacts>;
  exceptionRecord: ExceptionRecordConnection;
  exceptionRecordById?: Maybe<ExceptionRecord>;
  exceptionType: ExceptionTypeConnection;
  exceptionTypeById?: Maybe<ExceptionType>;
  holidayRegions: HolidayRegionsConnection;
  holidayRegionsById?: Maybe<HolidayRegions>;
  holidays: HolidaysConnection;
  holidaysById?: Maybe<Holidays>;
  jobAllocations: JobAllocationsConnection;
  jobAllocationsById?: Maybe<JobAllocations>;
  jobDependencies: JobDependenciesConnection;
  jobDependenciesById?: Maybe<JobDependencies>;
  jobOffers: JobOffersConnection;
  jobOffersById?: Maybe<JobOffers>;
  jobProducts: JobProductsConnection;
  jobProductsById?: Maybe<JobProducts>;
  jobTags: JobTagsConnection;
  jobTagsById?: Maybe<JobTags>;
  jobTasks: JobTasksConnection;
  jobTasksById?: Maybe<JobTasks>;
  jobTimeConstraints: JobTimeConstraintsConnection;
  jobTimeConstraintsById?: Maybe<JobTimeConstraints>;
  jobs: JobsConnection;
  jobsById?: Maybe<Jobs>;
  locationResourceScores: LocationResourceScoresConnection;
  locationResourceScoresById?: Maybe<LocationResourceScores>;
  locations: LocationsConnection;
  locationsById?: Maybe<Locations>;
  logger: LoggerConnection;
  loggerById?: Maybe<Logger>;
  /**
   * Retrieve all `Notifications` starting from a given timestamp.
   *
   * The entries are sorted by the `Timestamp` field in descending order. The result set is limited to the
   * first 10,000 entries.
   *
   * Because notifications can refer to different object types (currently `Jobs`, `Shifts`, `ResourceJobOffers`
   * and `ResourceShiftOffers`), the `Object` field is a union type that can be queried using type-dependent
   * query fragments. The type of `Object` can be queried by introspection with the `__typename` meta-field.
   *
   * Example:
   *
   * ```
   * {
   *   notifications(start: "2019-08-11T00:42:13.666Z") {
   *     Timestamp
   *     Action
   *
   *     Object {
   *       __typename
   *       ... on Jobs {
   *         UID
   *         Name
   *         Description
   *         JobStart: Start
   *         JobEnd: End
   *         JobStatus
   *       }
   *       ... on Shifts {
   *         UID
   *         DisplayName
   *         Start
   *         End
   *       }
   *       ... on ResourceJobOffers {
   *         UID
   *         JobOffer {
   *           UID
   *           Status
   *           Job {
   *             UID
   *             Name
   *             Description
   *             ActualStart
   *             ActualEnd
   *             JobStatus
   *           }
   *         }
   *       }
   *       ... on ResourceShiftOffers {
   *         UID
   *         ShiftOffer {
   *           UID
   *           Status
   *           Shifts {
   *             Shift {
   *               UID
   *               DisplayName
   *               Start
   *               End
   *             }
   *           }
   *         }
   *       }
   *     }
   *   }
   * }
   * ```
   */
  notifications: Array<Maybe<Notifications>>;
  products: ProductsConnection;
  productsById?: Maybe<Products>;
  recurringSchedules: RecurringSchedulesConnection;
  recurringSchedulesById?: Maybe<RecurringSchedules>;
  regions: RegionsConnection;
  regionsById?: Maybe<Regions>;
  resourceJobOffers: ResourceJobOffersConnection;
  resourceJobOffersById?: Maybe<ResourceJobOffers>;
  resourceOverrideRegions: ResourceOverrideRegionsConnection;
  resourceOverrideRegionsById?: Maybe<ResourceOverrideRegions>;
  resourceOverrides: ResourceOverridesConnection;
  resourceOverridesById?: Maybe<ResourceOverrides>;
  resourceRegions: ResourceRegionsConnection;
  resourceRegionsById?: Maybe<ResourceRegions>;
  resourceRequirementTags: ResourceRequirementTagsConnection;
  resourceRequirementTagsById?: Maybe<ResourceRequirementTags>;
  resourceRequirements: ResourceRequirementsConnection;
  resourceRequirementsById?: Maybe<ResourceRequirements>;
  resourceShiftBreaks: ResourceShiftBreaksConnection;
  resourceShiftBreaksById?: Maybe<ResourceShiftBreaks>;
  resourceShiftOffers: ResourceShiftOffersConnection;
  resourceShiftOffersById?: Maybe<ResourceShiftOffers>;
  resourceShifts: ResourceShiftsConnection;
  resourceShiftsById?: Maybe<ResourceShifts>;
  resourceTags: ResourceTagsConnection;
  resourceTagsById?: Maybe<ResourceTags>;
  resources: ResourcesConnection;
  resourcesById?: Maybe<Resources>;
  resourcesInRegions: ResourcesConnection;
  scheduleTemplates: ScheduleTemplatesConnection;
  scheduleTemplatesById?: Maybe<ScheduleTemplates>;
  shiftOfferShifts: ShiftOfferShiftsConnection;
  shiftOfferShiftsById?: Maybe<ShiftOfferShifts>;
  shiftOffers: ShiftOffersConnection;
  shiftOffersById?: Maybe<ShiftOffers>;
  shiftTags: ShiftTagsConnection;
  shiftTagsById?: Maybe<ShiftTags>;
  shifts: ShiftsConnection;
  shiftsById?: Maybe<Shifts>;
  sked_BroadcastRecipients: Sked_BroadcastRecipientsConnection;
  sked_BroadcastRecipientsById?: Maybe<Sked_BroadcastRecipients>;
  sked_Broadcasts: Sked_BroadcastsConnection;
  sked_BroadcastsById?: Maybe<Sked_Broadcasts>;
  starterTest: StarterTestConnection;
  starterTestById?: Maybe<StarterTest>;
  tagManagerSettings: TagManagerSettingsConnection;
  tagManagerSettingsById?: Maybe<TagManagerSettings>;
  tagRequest: TagRequestConnection;
  tagRequestById?: Maybe<TagRequest>;
  tags: TagsConnection;
  tagsById?: Maybe<Tags>;
  templatedActivities: TemplatedActivitiesConnection;
  templatedActivitiesById?: Maybe<TemplatedActivities>;
  templatedActivityResources: TemplatedActivityResourcesConnection;
  templatedActivityResourcesById?: Maybe<TemplatedActivityResources>;
  templatedAttendees: TemplatedAttendeesConnection;
  templatedAttendeesById?: Maybe<TemplatedAttendees>;
  templatedJobAllocations: TemplatedJobAllocationsConnection;
  templatedJobAllocationsById?: Maybe<TemplatedJobAllocations>;
  templatedJobDependencies: TemplatedJobDependenciesConnection;
  templatedJobDependenciesById?: Maybe<TemplatedJobDependencies>;
  templatedJobProducts: TemplatedJobProductsConnection;
  templatedJobProductsById?: Maybe<TemplatedJobProducts>;
  templatedJobTags: TemplatedJobTagsConnection;
  templatedJobTagsById?: Maybe<TemplatedJobTags>;
  templatedJobTasks: TemplatedJobTasksConnection;
  templatedJobTasksById?: Maybe<TemplatedJobTasks>;
  templatedJobTimeConstraints: TemplatedJobTimeConstraintsConnection;
  templatedJobTimeConstraintsById?: Maybe<TemplatedJobTimeConstraints>;
  templatedJobs: TemplatedJobsConnection;
  templatedJobsById?: Maybe<TemplatedJobs>;
  templatedResourceRequirementTags: TemplatedResourceRequirementTagsConnection;
  templatedResourceRequirementTagsById?: Maybe<TemplatedResourceRequirementTags>;
  templatedResourceRequirements: TemplatedResourceRequirementsConnection;
  templatedResourceRequirementsById?: Maybe<TemplatedResourceRequirements>;
  templatedResourceShifts: TemplatedResourceShiftsConnection;
  templatedResourceShiftsById?: Maybe<TemplatedResourceShifts>;
  templatedShiftTags: TemplatedShiftTagsConnection;
  templatedShiftTagsById?: Maybe<TemplatedShiftTags>;
  templatedShifts: TemplatedShiftsConnection;
  templatedShiftsById?: Maybe<TemplatedShifts>;
  userRegions: UserRegionsConnection;
  userRegionsById?: Maybe<UserRegions>;
  user_Ext: User_ExtConnection;
  user_ExtById?: Maybe<User_Ext>;
  users: UsersConnection;
  usersById?: Maybe<Users>;
};


export type QueryAccountResourceScoresArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAccountResourceScores']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAccountResourceScores']>;
};


export type QueryAccountResourceScoresByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAccountTagsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAccountTags']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAccountTags']>;
};


export type QueryAccountTagsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAccountsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAccounts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAccounts']>;
};


export type QueryAccountsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryActivitiesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterActivities']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivities']>;
};


export type QueryActivitiesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryActivityResourcesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterActivityResources']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivityResources']>;
};


export type QueryActivityResourcesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAdminSettingArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAdminSetting']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAdminSetting']>;
};


export type QueryAdminSettingByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAttendeesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAttendees']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAttendees']>;
};


export type QueryAttendeesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilities']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilities']>;
};


export type QueryAvailabilitiesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAvailabilityPatternResourcesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityPatternResources']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityPatternResources']>;
};


export type QueryAvailabilityPatternResourcesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAvailabilityPatternsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityPatterns']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityPatterns']>;
};


export type QueryAvailabilityPatternsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAvailabilityTemplateEntriesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityTemplateEntries']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityTemplateEntries']>;
};


export type QueryAvailabilityTemplateEntriesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAvailabilityTemplateResourcesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityTemplateResources']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityTemplateResources']>;
};


export type QueryAvailabilityTemplateResourcesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryAvailabilityTemplatesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityTemplates']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityTemplates']>;
};


export type QueryAvailabilityTemplatesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryClientAuthorizationArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterClientAuthorization']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseClientAuthorization']>;
};


export type QueryClientAuthorizationByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryClientAuthorizationServicesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterClientAuthorizationServices']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseClientAuthorizationServices']>;
};


export type QueryClientAuthorizationServicesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryClientAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterClientAvailabilities']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseClientAvailabilities']>;
};


export type QueryClientAvailabilitiesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryClientAvailabilityTemplateArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterClientAvailabilityTemplate']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseClientAvailabilityTemplate']>;
};


export type QueryClientAvailabilityTemplateByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryClientAvailabilityTemplateEntryArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterclientAvailabilityTemplateEntry']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseclientAvailabilityTemplateEntry']>;
};


export type QueryClientAvailabilityTemplateEntryByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryContactTagsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterContactTags']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseContactTags']>;
};


export type QueryContactTagsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryContactsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterContacts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseContacts']>;
};


export type QueryContactsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryExceptionRecordArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterExceptionRecord']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseExceptionRecord']>;
};


export type QueryExceptionRecordByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryExceptionTypeArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterExceptionType']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseExceptionType']>;
};


export type QueryExceptionTypeByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryHolidayRegionsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterHolidayRegions']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseHolidayRegions']>;
};


export type QueryHolidayRegionsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryHolidaysArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterHolidays']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseHolidays']>;
};


export type QueryHolidaysByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryJobAllocationsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobAllocations']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobAllocations']>;
};


export type QueryJobAllocationsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryJobDependenciesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobDependencies']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobDependencies']>;
};


export type QueryJobDependenciesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryJobOffersArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobOffers']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobOffers']>;
};


export type QueryJobOffersByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryJobProductsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobProducts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobProducts']>;
};


export type QueryJobProductsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryJobTagsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobTags']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobTags']>;
};


export type QueryJobTagsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryJobTasksArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobTasks']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobTasks']>;
};


export type QueryJobTasksByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryJobTimeConstraintsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobTimeConstraints']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobTimeConstraints']>;
};


export type QueryJobTimeConstraintsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryJobsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']>;
};


export type QueryJobsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryLocationResourceScoresArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterLocationResourceScores']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseLocationResourceScores']>;
};


export type QueryLocationResourceScoresByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryLocationsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterLocations']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseLocations']>;
};


export type QueryLocationsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryLoggerArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterLogger']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseLogger']>;
};


export type QueryLoggerByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryNotificationsArgs = {
  start: Scalars['Instant'];
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterProducts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseProducts']>;
};


export type QueryProductsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryRecurringSchedulesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterRecurringSchedules']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseRecurringSchedules']>;
};


export type QueryRecurringSchedulesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryRegionsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterRegions']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseRegions']>;
};


export type QueryRegionsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourceJobOffersArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceJobOffers']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceJobOffers']>;
};


export type QueryResourceJobOffersByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourceOverrideRegionsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceOverrideRegions']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceOverrideRegions']>;
};


export type QueryResourceOverrideRegionsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourceOverridesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceOverrides']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceOverrides']>;
};


export type QueryResourceOverridesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourceRegionsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceRegions']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceRegions']>;
};


export type QueryResourceRegionsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourceRequirementTagsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceRequirementTags']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceRequirementTags']>;
};


export type QueryResourceRequirementTagsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourceRequirementsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceRequirements']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceRequirements']>;
};


export type QueryResourceRequirementsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourceShiftBreaksArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShiftBreaks']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShiftBreaks']>;
};


export type QueryResourceShiftBreaksByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourceShiftOffersArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShiftOffers']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShiftOffers']>;
};


export type QueryResourceShiftOffersByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourceShiftsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShifts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShifts']>;
};


export type QueryResourceShiftsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourceTagsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceTags']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceTags']>;
};


export type QueryResourceTagsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourcesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResources']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResources']>;
};


export type QueryResourcesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryResourcesInRegionsArgs = {
  end: Scalars['Instant'];
  regionIds: Array<Scalars['ID']>;
  start: Scalars['Instant'];
};


export type QueryScheduleTemplatesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterScheduleTemplates']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseScheduleTemplates']>;
};


export type QueryScheduleTemplatesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryShiftOfferShiftsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterShiftOfferShifts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShiftOfferShifts']>;
};


export type QueryShiftOfferShiftsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryShiftOffersArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterShiftOffers']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShiftOffers']>;
};


export type QueryShiftOffersByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryShiftTagsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterShiftTags']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShiftTags']>;
};


export type QueryShiftTagsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryShiftsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterShifts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShifts']>;
};


export type QueryShiftsByIdArgs = {
  UID: Scalars['ID'];
};


export type QuerySked_BroadcastRecipientsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFiltersked_BroadcastRecipients']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClausesked_BroadcastRecipients']>;
};


export type QuerySked_BroadcastRecipientsByIdArgs = {
  UID: Scalars['ID'];
};


export type QuerySked_BroadcastsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFiltersked_Broadcasts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClausesked_Broadcasts']>;
};


export type QuerySked_BroadcastsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryStarterTestArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterStarterTest']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseStarterTest']>;
};


export type QueryStarterTestByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTagManagerSettingsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTagManagerSettings']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTagManagerSettings']>;
};


export type QueryTagManagerSettingsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTagRequestArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTagRequest']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTagRequest']>;
};


export type QueryTagRequestByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTagsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTags']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTags']>;
};


export type QueryTagsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedActivitiesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedActivities']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedActivities']>;
};


export type QueryTemplatedActivitiesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedActivityResourcesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedActivityResources']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedActivityResources']>;
};


export type QueryTemplatedActivityResourcesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedAttendeesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedAttendees']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedAttendees']>;
};


export type QueryTemplatedAttendeesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedJobAllocationsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobAllocations']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobAllocations']>;
};


export type QueryTemplatedJobAllocationsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedJobDependenciesArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobDependencies']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobDependencies']>;
};


export type QueryTemplatedJobDependenciesByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedJobProductsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobProducts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobProducts']>;
};


export type QueryTemplatedJobProductsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedJobTagsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobTags']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobTags']>;
};


export type QueryTemplatedJobTagsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedJobTasksArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobTasks']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobTasks']>;
};


export type QueryTemplatedJobTasksByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedJobTimeConstraintsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobTimeConstraints']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobTimeConstraints']>;
};


export type QueryTemplatedJobTimeConstraintsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedJobsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobs']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobs']>;
};


export type QueryTemplatedJobsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedResourceRequirementTagsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceRequirementTags']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceRequirementTags']>;
};


export type QueryTemplatedResourceRequirementTagsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedResourceRequirementsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceRequirements']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceRequirements']>;
};


export type QueryTemplatedResourceRequirementsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedResourceShiftsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceShifts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceShifts']>;
};


export type QueryTemplatedResourceShiftsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedShiftTagsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedShiftTags']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedShiftTags']>;
};


export type QueryTemplatedShiftTagsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryTemplatedShiftsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedShifts']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedShifts']>;
};


export type QueryTemplatedShiftsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryUserRegionsArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterUserRegions']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseUserRegions']>;
};


export type QueryUserRegionsByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryUser_ExtArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterUser_Ext']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseUser_Ext']>;
};


export type QueryUser_ExtByIdArgs = {
  UID: Scalars['ID'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['Base64']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterUsers']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseUsers']>;
};


export type QueryUsersByIdArgs = {
  UID: Scalars['ID'];
};

export type RecurringSchedules = {
  __typename?: 'RecurringSchedules';
  AckAllJobs: Scalars['Boolean'];
  ClientAvailabilities: Array<ClientAvailabilities>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Jobs: Array<Jobs>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Pattern?: Maybe<Scalars['String']>;
  Summary?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};


export type RecurringSchedulesClientAvailabilitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterClientAvailabilities']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseClientAvailabilities']>;
};


export type RecurringSchedulesJobsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']>;
};

export type RecurringSchedulesConnection = {
  __typename?: 'RecurringSchedulesConnection';
  edges: Array<RecurringSchedulesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RecurringSchedulesEdge = {
  __typename?: 'RecurringSchedulesEdge';
  cursor: Scalars['Base64'];
  node: RecurringSchedules;
  offset: Scalars['Int'];
};

export type Regions = {
  __typename?: 'Regions';
  CountryCode?: Maybe<Scalars['String']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Radius?: Maybe<Scalars['Int']>;
  Region: Array<ClientAuthorization>;
  Resources: Array<Resources>;
  Timezone: Scalars['String'];
  UID: Scalars['ID'];
  UserRegions: Array<UserRegions>;
};


export type RegionsRegionArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterClientAuthorization']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseClientAuthorization']>;
};


export type RegionsResourcesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResources']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResources']>;
};


export type RegionsUserRegionsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterUserRegions']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseUserRegions']>;
};

export type RegionsConnection = {
  __typename?: 'RegionsConnection';
  edges: Array<RegionsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RegionsEdge = {
  __typename?: 'RegionsEdge';
  cursor: Scalars['Base64'];
  node: Regions;
  offset: Scalars['Int'];
};

export type ResourceJobOffers = {
  __typename?: 'ResourceJobOffers';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  JobOffer: JobOffers;
  JobOfferId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  Response?: Maybe<Scalars['OfferResponse']>;
  Status: Scalars['ResourceOfferStatus'];
  TimeNotified?: Maybe<Scalars['Instant']>;
  TimeResponded?: Maybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type ResourceJobOffersConnection = {
  __typename?: 'ResourceJobOffersConnection';
  edges: Array<ResourceJobOffersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceJobOffersEdge = {
  __typename?: 'ResourceJobOffersEdge';
  cursor: Scalars['Base64'];
  node: ResourceJobOffers;
  offset: Scalars['Int'];
};

export type ResourceOverrideRegions = {
  __typename?: 'ResourceOverrideRegions';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Region: Regions;
  RegionId: Scalars['ID'];
  ResourceOverride: ResourceOverrides;
  ResourceOverrideId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type ResourceOverrideRegionsConnection = {
  __typename?: 'ResourceOverrideRegionsConnection';
  edges: Array<ResourceOverrideRegionsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceOverrideRegionsEdge = {
  __typename?: 'ResourceOverrideRegionsEdge';
  cursor: Scalars['Base64'];
  node: ResourceOverrideRegions;
  offset: Scalars['Int'];
};

export type ResourceOverrides = {
  __typename?: 'ResourceOverrides';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  End: Scalars['Instant'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  HomeAddress?: Maybe<Scalars['String']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  ResourceOverrideRegions: Array<ResourceOverrideRegions>;
  Start: Scalars['Instant'];
  UID: Scalars['ID'];
};


export type ResourceOverridesResourceOverrideRegionsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceOverrideRegions']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceOverrideRegions']>;
};

export type ResourceOverridesConnection = {
  __typename?: 'ResourceOverridesConnection';
  edges: Array<ResourceOverridesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceOverridesEdge = {
  __typename?: 'ResourceOverridesEdge';
  cursor: Scalars['Base64'];
  node: ResourceOverrides;
  offset: Scalars['Int'];
};

export type ResourceRegions = {
  __typename?: 'ResourceRegions';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End?: Maybe<Scalars['Instant']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Region: Regions;
  RegionId: Scalars['ID'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  Start?: Maybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type ResourceRegionsConnection = {
  __typename?: 'ResourceRegionsConnection';
  edges: Array<ResourceRegionsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceRegionsEdge = {
  __typename?: 'ResourceRegionsEdge';
  cursor: Scalars['Base64'];
  node: ResourceRegions;
  offset: Scalars['Int'];
};

export type ResourceRequirementTags = {
  __typename?: 'ResourceRequirementTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  ResourceRequirement: ResourceRequirements;
  ResourceRequirementId: Scalars['ID'];
  Tag: Tags;
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type ResourceRequirementTagsConnection = {
  __typename?: 'ResourceRequirementTagsConnection';
  edges: Array<ResourceRequirementTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceRequirementTagsEdge = {
  __typename?: 'ResourceRequirementTagsEdge';
  cursor: Scalars['Base64'];
  node: ResourceRequirementTags;
  offset: Scalars['Int'];
};

export type ResourceRequirements = {
  __typename?: 'ResourceRequirements';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Duration?: Maybe<Scalars['Duration']>;
  Job: Jobs;
  JobAllocationCount: Scalars['Int'];
  JobAllocationTimeSource: Scalars['Boolean'];
  JobAllocations: Array<JobAllocations>;
  JobId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Quantity: Scalars['Int'];
  RelativeStart?: Maybe<Scalars['Duration']>;
  ScheduledEnd?: Maybe<Scalars['Instant']>;
  ScheduledStart?: Maybe<Scalars['Instant']>;
  Status: Scalars['JobStatus'];
  Tags: Array<ResourceRequirementTags>;
  UID: Scalars['ID'];
};


export type ResourceRequirementsJobAllocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobAllocations']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobAllocations']>;
};


export type ResourceRequirementsTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceRequirementTags']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceRequirementTags']>;
};

export type ResourceRequirementsConnection = {
  __typename?: 'ResourceRequirementsConnection';
  edges: Array<ResourceRequirementsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceRequirementsEdge = {
  __typename?: 'ResourceRequirementsEdge';
  cursor: Scalars['Base64'];
  node: ResourceRequirements;
  offset: Scalars['Int'];
};

export type ResourceShiftBreaks = {
  __typename?: 'ResourceShiftBreaks';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End?: Maybe<Scalars['Instant']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceShift: ResourceShifts;
  ResourceShiftId: Scalars['ID'];
  Start: Scalars['Instant'];
  UID: Scalars['ID'];
};

export type ResourceShiftBreaksConnection = {
  __typename?: 'ResourceShiftBreaksConnection';
  edges: Array<ResourceShiftBreaksEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceShiftBreaksEdge = {
  __typename?: 'ResourceShiftBreaksEdge';
  cursor: Scalars['Base64'];
  node: ResourceShiftBreaks;
  offset: Scalars['Int'];
};

export type ResourceShiftOffers = {
  __typename?: 'ResourceShiftOffers';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  Response?: Maybe<Scalars['OfferResponse']>;
  ShiftOffer: ShiftOffers;
  ShiftOfferId: Scalars['ID'];
  Status: Scalars['ResourceOfferStatus'];
  TimeNotified?: Maybe<Scalars['Instant']>;
  TimeResponded?: Maybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type ResourceShiftOffersConnection = {
  __typename?: 'ResourceShiftOffersConnection';
  edges: Array<ResourceShiftOffersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceShiftOffersEdge = {
  __typename?: 'ResourceShiftOffersEdge';
  cursor: Scalars['Base64'];
  node: ResourceShiftOffers;
  offset: Scalars['Int'];
};

export type ResourceShifts = {
  __typename?: 'ResourceShifts';
  ActualEnd?: Maybe<Scalars['Instant']>;
  ActualStart?: Maybe<Scalars['Instant']>;
  Breaks: Array<ResourceShiftBreaks>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  Shift: Shifts;
  ShiftId: Scalars['ID'];
  UID: Scalars['ID'];
};


export type ResourceShiftsBreaksArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShiftBreaks']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShiftBreaks']>;
};

export type ResourceShiftsConnection = {
  __typename?: 'ResourceShiftsConnection';
  edges: Array<ResourceShiftsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceShiftsEdge = {
  __typename?: 'ResourceShiftsEdge';
  cursor: Scalars['Base64'];
  node: ResourceShifts;
  offset: Scalars['Int'];
};

export type ResourceTags = {
  __typename?: 'ResourceTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  ExpiryDate?: Maybe<Scalars['Instant']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  Tag: Tags;
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type ResourceTagsConnection = {
  __typename?: 'ResourceTagsConnection';
  edges: Array<ResourceTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourceTagsEdge = {
  __typename?: 'ResourceTagsEdge';
  cursor: Scalars['Base64'];
  node: ResourceTags;
  offset: Scalars['Int'];
};

export type Resources = {
  __typename?: 'Resources';
  AccountScores: Array<AccountResourceScores>;
  Activities: Array<Activities>;
  Alias?: Maybe<Scalars['String']>;
  AutoSchedule: Scalars['Boolean'];
  Availabilities: Array<Availabilities>;
  AvailabilityPatterns: Array<AvailabilityPatternResources>;
  CareConnectUserID?: Maybe<Scalars['BigDecimal']>;
  Category?: Maybe<Scalars['String']>;
  CountryCode?: Maybe<Scalars['String']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EffectiveTerminationDate?: Maybe<Scalars['Instant']>;
  Email?: Maybe<Scalars['String']>;
  EmploymentType?: Maybe<Scalars['String']>;
  FSM?: Maybe<Scalars['String']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  HomeAddress?: Maybe<Scalars['String']>;
  IsActive: Scalars['Boolean'];
  JobAllocations: Array<JobAllocations>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationScores: Array<LocationResourceScores>;
  MobilePhone?: Maybe<Scalars['String']>;
  Name: Scalars['String'];
  Notes?: Maybe<Scalars['String']>;
  NotificationType?: Maybe<Scalars['String']>;
  PrimaryPhone?: Maybe<Scalars['String']>;
  PrimaryRegion: Regions;
  PrimaryRegionId: Scalars['ID'];
  Rating?: Maybe<Scalars['Int']>;
  ReportsTo?: Maybe<Scalars['String']>;
  RequestedWorkingHoursPerWeek?: Maybe<Scalars['BigDecimal']>;
  ResourceActivities: Array<ActivityResources>;
  ResourceOverrides: Array<ResourceOverrides>;
  ResourceRegions: Array<ResourceRegions>;
  ResourceShifts: Array<ResourceShifts>;
  ResourceTags: Array<ResourceTags>;
  ResourceType?: Maybe<Scalars['String']>;
  TemplatedActivities: Array<TemplatedActivities>;
  TemplatedJobAllocations: Array<TemplatedJobAllocations>;
  TemplatedResourceActivities: Array<TemplatedActivityResources>;
  TemplatedResourceShifts: Array<TemplatedResourceShifts>;
  TotalUtilizedHours?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
  User?: Maybe<Users>;
  UserId?: Maybe<Scalars['ID']>;
  WeeklyHours?: Maybe<Scalars['BigDecimal']>;
  WorkingHourType?: Maybe<Scalars['WorkingHourType']>;
  amsuserstatus?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  complianceissue?: Maybe<Scalars['String']>;
  degreetypelab?: Maybe<Scalars['String']>;
  estimatedactivationtimestamp?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  homephone?: Maybe<Scalars['String']>;
  middleInitial?: Maybe<Scalars['String']>;
  npi?: Maybe<Scalars['String']>;
  onboardingstatuslabel?: Maybe<Scalars['String']>;
  personalemail?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  uniqueeid?: Maybe<Scalars['String']>;
  worksfor?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};


export type ResourcesAccountScoresArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAccountResourceScores']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAccountResourceScores']>;
};


export type ResourcesActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterActivities']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivities']>;
};


export type ResourcesAvailabilitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilities']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilities']>;
};


export type ResourcesAvailabilityPatternsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityPatternResources']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityPatternResources']>;
};


export type ResourcesJobAllocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobAllocations']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobAllocations']>;
};


export type ResourcesLocationScoresArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterLocationResourceScores']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseLocationResourceScores']>;
};


export type ResourcesResourceActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterActivityResources']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivityResources']>;
};


export type ResourcesResourceOverridesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceOverrides']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceOverrides']>;
};


export type ResourcesResourceRegionsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceRegions']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceRegions']>;
};


export type ResourcesResourceShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShifts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShifts']>;
};


export type ResourcesResourceTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceTags']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceTags']>;
};


export type ResourcesTemplatedActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedActivities']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedActivities']>;
};


export type ResourcesTemplatedJobAllocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobAllocations']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobAllocations']>;
};


export type ResourcesTemplatedResourceActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedActivityResources']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedActivityResources']>;
};


export type ResourcesTemplatedResourceShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceShifts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceShifts']>;
};

export type ResourcesConnection = {
  __typename?: 'ResourcesConnection';
  edges: Array<ResourcesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ResourcesEdge = {
  __typename?: 'ResourcesEdge';
  cursor: Scalars['Base64'];
  node: Resources;
  offset: Scalars['Int'];
};

export type ScheduleTemplates = {
  __typename?: 'ScheduleTemplates';
  Activities: Array<Activities>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DeletedBy?: Maybe<Users>;
  DeletedById?: Maybe<Scalars['ID']>;
  DeletedDate?: Maybe<Scalars['Instant']>;
  Description?: Maybe<Scalars['String']>;
  IsDeleted: Scalars['Boolean'];
  Jobs: Array<Jobs>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  PeriodDays?: Maybe<Scalars['Int']>;
  Shifts: Array<Shifts>;
  TemplatedActivities: Array<TemplatedActivities>;
  TemplatedJobs: Array<TemplatedJobs>;
  TemplatedShifts: Array<TemplatedShifts>;
  UID: Scalars['ID'];
};


export type ScheduleTemplatesActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterActivities']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivities']>;
};


export type ScheduleTemplatesJobsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']>;
};


export type ScheduleTemplatesShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterShifts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShifts']>;
};


export type ScheduleTemplatesTemplatedActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedActivities']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedActivities']>;
};


export type ScheduleTemplatesTemplatedJobsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobs']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobs']>;
};


export type ScheduleTemplatesTemplatedShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedShifts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedShifts']>;
};

export type ScheduleTemplatesConnection = {
  __typename?: 'ScheduleTemplatesConnection';
  edges: Array<ScheduleTemplatesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ScheduleTemplatesEdge = {
  __typename?: 'ScheduleTemplatesEdge';
  cursor: Scalars['Base64'];
  node: ScheduleTemplates;
  offset: Scalars['Int'];
};

export type SchemaMutation = {
  __typename?: 'SchemaMutation';
  deleteAccountResourceScores?: Maybe<Scalars['ID']>;
  deleteAccountTags?: Maybe<Scalars['ID']>;
  deleteAccounts?: Maybe<Scalars['ID']>;
  deleteActivities?: Maybe<Scalars['ID']>;
  deleteActivityResources?: Maybe<Scalars['ID']>;
  deleteAdminSetting?: Maybe<Scalars['ID']>;
  deleteAttendees?: Maybe<Scalars['ID']>;
  deleteAvailabilities?: Maybe<Scalars['ID']>;
  deleteAvailabilityPatternResources?: Maybe<Scalars['ID']>;
  deleteAvailabilityPatterns?: Maybe<Scalars['ID']>;
  deleteAvailabilityTemplateEntries?: Maybe<Scalars['ID']>;
  deleteAvailabilityTemplateResources?: Maybe<Scalars['ID']>;
  deleteAvailabilityTemplates?: Maybe<Scalars['ID']>;
  deleteClientAuthorization?: Maybe<Scalars['ID']>;
  deleteClientAuthorizationServices?: Maybe<Scalars['ID']>;
  deleteClientAvailabilities?: Maybe<Scalars['ID']>;
  deleteClientAvailabilityTemplate?: Maybe<Scalars['ID']>;
  deleteContactTags?: Maybe<Scalars['ID']>;
  deleteContacts?: Maybe<Scalars['ID']>;
  deleteExceptionRecord?: Maybe<Scalars['ID']>;
  deleteExceptionType?: Maybe<Scalars['ID']>;
  deleteHolidayRegions?: Maybe<Scalars['ID']>;
  deleteHolidays?: Maybe<Scalars['ID']>;
  deleteJobAllocations?: Maybe<Scalars['ID']>;
  deleteJobDependencies?: Maybe<Scalars['ID']>;
  deleteJobOffers?: Maybe<Scalars['ID']>;
  deleteJobProducts?: Maybe<Scalars['ID']>;
  deleteJobTags?: Maybe<Scalars['ID']>;
  deleteJobTasks?: Maybe<Scalars['ID']>;
  deleteJobTimeConstraints?: Maybe<Scalars['ID']>;
  deleteJobs?: Maybe<Scalars['ID']>;
  deleteLocationResourceScores?: Maybe<Scalars['ID']>;
  deleteLocations?: Maybe<Scalars['ID']>;
  deleteLogger?: Maybe<Scalars['ID']>;
  deleteProducts?: Maybe<Scalars['ID']>;
  deleteRecurringSchedules?: Maybe<Scalars['ID']>;
  deleteRegions?: Maybe<Scalars['ID']>;
  deleteResourceJobOffers?: Maybe<Scalars['ID']>;
  deleteResourceOverrideRegions?: Maybe<Scalars['ID']>;
  deleteResourceOverrides?: Maybe<Scalars['ID']>;
  deleteResourceRegions?: Maybe<Scalars['ID']>;
  deleteResourceRequirementTags?: Maybe<Scalars['ID']>;
  deleteResourceRequirements?: Maybe<Scalars['ID']>;
  deleteResourceShiftBreaks?: Maybe<Scalars['ID']>;
  deleteResourceShiftOffers?: Maybe<Scalars['ID']>;
  deleteResourceShifts?: Maybe<Scalars['ID']>;
  deleteResourceTags?: Maybe<Scalars['ID']>;
  deleteResources?: Maybe<Scalars['ID']>;
  deleteScheduleTemplates?: Maybe<Scalars['ID']>;
  deleteShiftOfferShifts?: Maybe<Scalars['ID']>;
  deleteShiftOffers?: Maybe<Scalars['ID']>;
  deleteShiftTags?: Maybe<Scalars['ID']>;
  deleteShifts?: Maybe<Scalars['ID']>;
  deleteStarterTest?: Maybe<Scalars['ID']>;
  deleteTagManagerSettings?: Maybe<Scalars['ID']>;
  deleteTagRequest?: Maybe<Scalars['ID']>;
  deleteTags?: Maybe<Scalars['ID']>;
  deleteTemplatedActivities?: Maybe<Scalars['ID']>;
  deleteTemplatedActivityResources?: Maybe<Scalars['ID']>;
  deleteTemplatedAttendees?: Maybe<Scalars['ID']>;
  deleteTemplatedJobAllocations?: Maybe<Scalars['ID']>;
  deleteTemplatedJobDependencies?: Maybe<Scalars['ID']>;
  deleteTemplatedJobProducts?: Maybe<Scalars['ID']>;
  deleteTemplatedJobTags?: Maybe<Scalars['ID']>;
  deleteTemplatedJobTasks?: Maybe<Scalars['ID']>;
  deleteTemplatedJobTimeConstraints?: Maybe<Scalars['ID']>;
  deleteTemplatedJobs?: Maybe<Scalars['ID']>;
  deleteTemplatedResourceRequirementTags?: Maybe<Scalars['ID']>;
  deleteTemplatedResourceRequirements?: Maybe<Scalars['ID']>;
  deleteTemplatedResourceShifts?: Maybe<Scalars['ID']>;
  deleteTemplatedShiftTags?: Maybe<Scalars['ID']>;
  deleteTemplatedShifts?: Maybe<Scalars['ID']>;
  deleteUserRegions?: Maybe<Scalars['ID']>;
  deleteUser_Ext?: Maybe<Scalars['ID']>;
  deleteclientAvailabilityTemplateEntry?: Maybe<Scalars['ID']>;
  deletesked_BroadcastRecipients?: Maybe<Scalars['ID']>;
  deletesked_Broadcasts?: Maybe<Scalars['ID']>;
  getAccountResourceScores: SimpleAccountResourceScores;
  getAccountTags: SimpleAccountTags;
  getAccounts: SimpleAccounts;
  getActivities: SimpleActivities;
  getActivityResources: SimpleActivityResources;
  getAdminSetting: SimpleAdminSetting;
  getAttendees: SimpleAttendees;
  getAvailabilities: SimpleAvailabilities;
  getAvailabilityPatternResources: SimpleAvailabilityPatternResources;
  getAvailabilityPatterns: SimpleAvailabilityPatterns;
  getAvailabilityTemplateEntries: SimpleAvailabilityTemplateEntries;
  getAvailabilityTemplateResources: SimpleAvailabilityTemplateResources;
  getAvailabilityTemplates: SimpleAvailabilityTemplates;
  getClientAuthorization: SimpleClientAuthorization;
  getClientAuthorizationServices: SimpleClientAuthorizationServices;
  getClientAvailabilities: SimpleClientAvailabilities;
  getClientAvailabilityTemplate: SimpleClientAvailabilityTemplate;
  getContactTags: SimpleContactTags;
  getContacts: SimpleContacts;
  getExceptionRecord: SimpleExceptionRecord;
  getExceptionType: SimpleExceptionType;
  getHolidayRegions: SimpleHolidayRegions;
  getHolidays: SimpleHolidays;
  getJobAllocations: SimpleJobAllocations;
  getJobDependencies: SimpleJobDependencies;
  getJobOffers: SimpleJobOffers;
  getJobProducts: SimpleJobProducts;
  getJobTags: SimpleJobTags;
  getJobTasks: SimpleJobTasks;
  getJobTimeConstraints: SimpleJobTimeConstraints;
  getJobs: SimpleJobs;
  getLocationResourceScores: SimpleLocationResourceScores;
  getLocations: SimpleLocations;
  getLogger: SimpleLogger;
  getProducts: SimpleProducts;
  getRecurringSchedules: SimpleRecurringSchedules;
  getRegions: SimpleRegions;
  getResourceJobOffers: SimpleResourceJobOffers;
  getResourceOverrideRegions: SimpleResourceOverrideRegions;
  getResourceOverrides: SimpleResourceOverrides;
  getResourceRegions: SimpleResourceRegions;
  getResourceRequirementTags: SimpleResourceRequirementTags;
  getResourceRequirements: SimpleResourceRequirements;
  getResourceShiftBreaks: SimpleResourceShiftBreaks;
  getResourceShiftOffers: SimpleResourceShiftOffers;
  getResourceShifts: SimpleResourceShifts;
  getResourceTags: SimpleResourceTags;
  getResources: SimpleResources;
  getScheduleTemplates: SimpleScheduleTemplates;
  getShiftOfferShifts: SimpleShiftOfferShifts;
  getShiftOffers: SimpleShiftOffers;
  getShiftTags: SimpleShiftTags;
  getShifts: SimpleShifts;
  getStarterTest: SimpleStarterTest;
  getTagManagerSettings: SimpleTagManagerSettings;
  getTagRequest: SimpleTagRequest;
  getTags: SimpleTags;
  getTemplatedActivities: SimpleTemplatedActivities;
  getTemplatedActivityResources: SimpleTemplatedActivityResources;
  getTemplatedAttendees: SimpleTemplatedAttendees;
  getTemplatedJobAllocations: SimpleTemplatedJobAllocations;
  getTemplatedJobDependencies: SimpleTemplatedJobDependencies;
  getTemplatedJobProducts: SimpleTemplatedJobProducts;
  getTemplatedJobTags: SimpleTemplatedJobTags;
  getTemplatedJobTasks: SimpleTemplatedJobTasks;
  getTemplatedJobTimeConstraints: SimpleTemplatedJobTimeConstraints;
  getTemplatedJobs: SimpleTemplatedJobs;
  getTemplatedResourceRequirementTags: SimpleTemplatedResourceRequirementTags;
  getTemplatedResourceRequirements: SimpleTemplatedResourceRequirements;
  getTemplatedResourceShifts: SimpleTemplatedResourceShifts;
  getTemplatedShiftTags: SimpleTemplatedShiftTags;
  getTemplatedShifts: SimpleTemplatedShifts;
  getUserRegions: SimpleUserRegions;
  getUser_Ext: SimpleUser_Ext;
  getclientAvailabilityTemplateEntry: SimpleclientAvailabilityTemplateEntry;
  getsked_BroadcastRecipients: Simplesked_BroadcastRecipients;
  getsked_Broadcasts: Simplesked_Broadcasts;
  insertAccountResourceScores: Scalars['ID'];
  insertAccountTags: Scalars['ID'];
  insertAccounts: Scalars['ID'];
  insertActivities: Scalars['ID'];
  insertActivityResources: Scalars['ID'];
  insertAdminSetting: Scalars['ID'];
  insertAttendees: Scalars['ID'];
  insertAvailabilities: Scalars['ID'];
  insertAvailabilityPatternResources: Scalars['ID'];
  insertAvailabilityPatterns: Scalars['ID'];
  insertAvailabilityTemplateEntries: Scalars['ID'];
  insertAvailabilityTemplateResources: Scalars['ID'];
  insertAvailabilityTemplates: Scalars['ID'];
  insertClientAuthorization: Scalars['ID'];
  insertClientAuthorizationServices: Scalars['ID'];
  insertClientAvailabilities: Scalars['ID'];
  insertClientAvailabilityTemplate: Scalars['ID'];
  insertContactTags: Scalars['ID'];
  insertContacts: Scalars['ID'];
  insertExceptionRecord: Scalars['ID'];
  insertExceptionType: Scalars['ID'];
  insertHolidayRegions: Scalars['ID'];
  insertHolidays: Scalars['ID'];
  insertJobAllocations: Scalars['ID'];
  insertJobDependencies: Scalars['ID'];
  insertJobOffers: Scalars['ID'];
  insertJobProducts: Scalars['ID'];
  insertJobTags: Scalars['ID'];
  insertJobTasks: Scalars['ID'];
  insertJobTimeConstraints: Scalars['ID'];
  insertJobs: Scalars['ID'];
  insertLocationResourceScores: Scalars['ID'];
  insertLocations: Scalars['ID'];
  insertLogger: Scalars['ID'];
  insertProducts: Scalars['ID'];
  insertRecurringSchedules: Scalars['ID'];
  insertRegions: Scalars['ID'];
  insertResourceJobOffers: Scalars['ID'];
  insertResourceOverrideRegions: Scalars['ID'];
  insertResourceOverrides: Scalars['ID'];
  insertResourceRegions: Scalars['ID'];
  insertResourceRequirementTags: Scalars['ID'];
  insertResourceRequirements: Scalars['ID'];
  insertResourceShiftBreaks: Scalars['ID'];
  insertResourceShiftOffers: Scalars['ID'];
  insertResourceShifts: Scalars['ID'];
  insertResourceTags: Scalars['ID'];
  insertResources: Scalars['ID'];
  insertScheduleTemplates: Scalars['ID'];
  insertShiftOfferShifts: Scalars['ID'];
  insertShiftOffers: Scalars['ID'];
  insertShiftTags: Scalars['ID'];
  insertShifts: Scalars['ID'];
  insertStarterTest: Scalars['ID'];
  insertTagManagerSettings: Scalars['ID'];
  insertTagRequest: Scalars['ID'];
  insertTags: Scalars['ID'];
  insertTemplatedActivities: Scalars['ID'];
  insertTemplatedActivityResources: Scalars['ID'];
  insertTemplatedAttendees: Scalars['ID'];
  insertTemplatedJobAllocations: Scalars['ID'];
  insertTemplatedJobDependencies: Scalars['ID'];
  insertTemplatedJobProducts: Scalars['ID'];
  insertTemplatedJobTags: Scalars['ID'];
  insertTemplatedJobTasks: Scalars['ID'];
  insertTemplatedJobTimeConstraints: Scalars['ID'];
  insertTemplatedJobs: Scalars['ID'];
  insertTemplatedResourceRequirementTags: Scalars['ID'];
  insertTemplatedResourceRequirements: Scalars['ID'];
  insertTemplatedResourceShifts: Scalars['ID'];
  insertTemplatedShiftTags: Scalars['ID'];
  insertTemplatedShifts: Scalars['ID'];
  insertUserRegions: Scalars['ID'];
  insertUser_Ext: Scalars['ID'];
  insertclientAvailabilityTemplateEntry: Scalars['ID'];
  insertsked_BroadcastRecipients: Scalars['ID'];
  insertsked_Broadcasts: Scalars['ID'];
  updateAccountResourceScores: Scalars['ID'];
  updateAccountTags: Scalars['ID'];
  updateAccounts: Scalars['ID'];
  updateActivities: Scalars['ID'];
  updateActivityResources: Scalars['ID'];
  updateAdminSetting: Scalars['ID'];
  updateAttendees: Scalars['ID'];
  updateAvailabilities: Scalars['ID'];
  updateAvailabilityPatternResources: Scalars['ID'];
  updateAvailabilityPatterns: Scalars['ID'];
  updateAvailabilityTemplateEntries: Scalars['ID'];
  updateAvailabilityTemplateResources: Scalars['ID'];
  updateAvailabilityTemplates: Scalars['ID'];
  updateClientAuthorization: Scalars['ID'];
  updateClientAuthorizationServices: Scalars['ID'];
  updateClientAvailabilities: Scalars['ID'];
  updateClientAvailabilityTemplate: Scalars['ID'];
  updateContactTags: Scalars['ID'];
  updateContacts: Scalars['ID'];
  updateExceptionRecord: Scalars['ID'];
  updateExceptionType: Scalars['ID'];
  updateHolidayRegions: Scalars['ID'];
  updateHolidays: Scalars['ID'];
  updateJobAllocations: Scalars['ID'];
  updateJobDependencies: Scalars['ID'];
  updateJobOffers: Scalars['ID'];
  updateJobProducts: Scalars['ID'];
  updateJobTags: Scalars['ID'];
  updateJobTasks: Scalars['ID'];
  updateJobTimeConstraints: Scalars['ID'];
  updateJobs: Scalars['ID'];
  updateLocationResourceScores: Scalars['ID'];
  updateLocations: Scalars['ID'];
  updateLogger: Scalars['ID'];
  updateProducts: Scalars['ID'];
  updateRecurringSchedules: Scalars['ID'];
  updateRegions: Scalars['ID'];
  updateResourceJobOffers: Scalars['ID'];
  updateResourceOverrideRegions: Scalars['ID'];
  updateResourceOverrides: Scalars['ID'];
  updateResourceRegions: Scalars['ID'];
  updateResourceRequirementTags: Scalars['ID'];
  updateResourceRequirements: Scalars['ID'];
  updateResourceShiftBreaks: Scalars['ID'];
  updateResourceShiftOffers: Scalars['ID'];
  updateResourceShifts: Scalars['ID'];
  updateResourceTags: Scalars['ID'];
  updateResources: Scalars['ID'];
  updateScheduleTemplates: Scalars['ID'];
  updateShiftOfferShifts: Scalars['ID'];
  updateShiftOffers: Scalars['ID'];
  updateShiftTags: Scalars['ID'];
  updateShifts: Scalars['ID'];
  updateStarterTest: Scalars['ID'];
  updateTagManagerSettings: Scalars['ID'];
  updateTagRequest: Scalars['ID'];
  updateTags: Scalars['ID'];
  updateTemplatedActivities: Scalars['ID'];
  updateTemplatedActivityResources: Scalars['ID'];
  updateTemplatedAttendees: Scalars['ID'];
  updateTemplatedJobAllocations: Scalars['ID'];
  updateTemplatedJobDependencies: Scalars['ID'];
  updateTemplatedJobProducts: Scalars['ID'];
  updateTemplatedJobTags: Scalars['ID'];
  updateTemplatedJobTasks: Scalars['ID'];
  updateTemplatedJobTimeConstraints: Scalars['ID'];
  updateTemplatedJobs: Scalars['ID'];
  updateTemplatedResourceRequirementTags: Scalars['ID'];
  updateTemplatedResourceRequirements: Scalars['ID'];
  updateTemplatedResourceShifts: Scalars['ID'];
  updateTemplatedShiftTags: Scalars['ID'];
  updateTemplatedShifts: Scalars['ID'];
  updateUserRegions: Scalars['ID'];
  updateUser_Ext: Scalars['ID'];
  updateclientAvailabilityTemplateEntry: Scalars['ID'];
  updatesked_BroadcastRecipients: Scalars['ID'];
  updatesked_Broadcasts: Scalars['ID'];
  upsertAccountResourceScores: Scalars['ID'];
  upsertAccountTags: Scalars['ID'];
  upsertAccounts: Scalars['ID'];
  upsertActivities: Scalars['ID'];
  upsertActivityResources: Scalars['ID'];
  upsertAdminSetting: Scalars['ID'];
  upsertAttendees: Scalars['ID'];
  upsertAvailabilities: Scalars['ID'];
  upsertAvailabilityPatternResources: Scalars['ID'];
  upsertAvailabilityPatterns: Scalars['ID'];
  upsertAvailabilityTemplateEntries: Scalars['ID'];
  upsertAvailabilityTemplateResources: Scalars['ID'];
  upsertAvailabilityTemplates: Scalars['ID'];
  upsertClientAuthorization: Scalars['ID'];
  upsertClientAuthorizationServices: Scalars['ID'];
  upsertClientAvailabilities: Scalars['ID'];
  upsertClientAvailabilityTemplate: Scalars['ID'];
  upsertContactTags: Scalars['ID'];
  upsertContacts: Scalars['ID'];
  upsertExceptionRecord: Scalars['ID'];
  upsertExceptionType: Scalars['ID'];
  upsertHolidayRegions: Scalars['ID'];
  upsertHolidays: Scalars['ID'];
  upsertJobAllocations: Scalars['ID'];
  upsertJobDependencies: Scalars['ID'];
  upsertJobOffers: Scalars['ID'];
  upsertJobProducts: Scalars['ID'];
  upsertJobTags: Scalars['ID'];
  upsertJobTasks: Scalars['ID'];
  upsertJobTimeConstraints: Scalars['ID'];
  upsertJobs: Scalars['ID'];
  upsertLocationResourceScores: Scalars['ID'];
  upsertLocations: Scalars['ID'];
  upsertLogger: Scalars['ID'];
  upsertProducts: Scalars['ID'];
  upsertRecurringSchedules: Scalars['ID'];
  upsertRegions: Scalars['ID'];
  upsertResourceJobOffers: Scalars['ID'];
  upsertResourceOverrideRegions: Scalars['ID'];
  upsertResourceOverrides: Scalars['ID'];
  upsertResourceRegions: Scalars['ID'];
  upsertResourceRequirementTags: Scalars['ID'];
  upsertResourceRequirements: Scalars['ID'];
  upsertResourceShiftBreaks: Scalars['ID'];
  upsertResourceShiftOffers: Scalars['ID'];
  upsertResourceShifts: Scalars['ID'];
  upsertResourceTags: Scalars['ID'];
  upsertResources: Scalars['ID'];
  upsertScheduleTemplates: Scalars['ID'];
  upsertShiftOfferShifts: Scalars['ID'];
  upsertShiftOffers: Scalars['ID'];
  upsertShiftTags: Scalars['ID'];
  upsertShifts: Scalars['ID'];
  upsertStarterTest: Scalars['ID'];
  upsertTagManagerSettings: Scalars['ID'];
  upsertTagRequest: Scalars['ID'];
  upsertTags: Scalars['ID'];
  upsertTemplatedActivities: Scalars['ID'];
  upsertTemplatedActivityResources: Scalars['ID'];
  upsertTemplatedAttendees: Scalars['ID'];
  upsertTemplatedJobAllocations: Scalars['ID'];
  upsertTemplatedJobDependencies: Scalars['ID'];
  upsertTemplatedJobProducts: Scalars['ID'];
  upsertTemplatedJobTags: Scalars['ID'];
  upsertTemplatedJobTasks: Scalars['ID'];
  upsertTemplatedJobTimeConstraints: Scalars['ID'];
  upsertTemplatedJobs: Scalars['ID'];
  upsertTemplatedResourceRequirementTags: Scalars['ID'];
  upsertTemplatedResourceRequirements: Scalars['ID'];
  upsertTemplatedResourceShifts: Scalars['ID'];
  upsertTemplatedShiftTags: Scalars['ID'];
  upsertTemplatedShifts: Scalars['ID'];
  upsertUserRegions: Scalars['ID'];
  upsertUser_Ext: Scalars['ID'];
  upsertclientAvailabilityTemplateEntry: Scalars['ID'];
  upsertsked_BroadcastRecipients: Scalars['ID'];
  upsertsked_Broadcasts: Scalars['ID'];
};


export type SchemaMutationDeleteAccountResourceScoresArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAccountTagsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAccountsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteActivitiesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteActivityResourcesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAdminSettingArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAttendeesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAvailabilitiesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAvailabilityPatternResourcesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAvailabilityPatternsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAvailabilityTemplateEntriesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAvailabilityTemplateResourcesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteAvailabilityTemplatesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteClientAuthorizationArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteClientAuthorizationServicesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteClientAvailabilitiesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteClientAvailabilityTemplateArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteContactTagsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteContactsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteExceptionRecordArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteExceptionTypeArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteHolidayRegionsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteHolidaysArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteJobAllocationsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteJobDependenciesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteJobOffersArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteJobProductsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteJobTagsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteJobTasksArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteJobTimeConstraintsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteJobsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteLocationResourceScoresArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteLocationsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteLoggerArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteProductsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteRecurringSchedulesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteRegionsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourceJobOffersArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourceOverrideRegionsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourceOverridesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourceRegionsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourceRequirementTagsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourceRequirementsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourceShiftBreaksArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourceShiftOffersArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourceShiftsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourceTagsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteResourcesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteScheduleTemplatesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteShiftOfferShiftsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteShiftOffersArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteShiftTagsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteShiftsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteStarterTestArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTagManagerSettingsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTagRequestArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTagsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedActivitiesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedActivityResourcesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedAttendeesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedJobAllocationsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedJobDependenciesArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedJobProductsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedJobTagsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedJobTasksArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedJobTimeConstraintsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedJobsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedResourceRequirementTagsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedResourceRequirementsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedResourceShiftsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedShiftTagsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteTemplatedShiftsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteUserRegionsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteUser_ExtArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeleteclientAvailabilityTemplateEntryArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeletesked_BroadcastRecipientsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationDeletesked_BroadcastsArgs = {
  UID: Scalars['ID'];
};


export type SchemaMutationGetAccountResourceScoresArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAccountTagsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAccountsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetActivitiesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetActivityResourcesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAdminSettingArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAttendeesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAvailabilitiesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAvailabilityPatternResourcesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAvailabilityPatternsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAvailabilityTemplateEntriesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAvailabilityTemplateResourcesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetAvailabilityTemplatesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetClientAuthorizationArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetClientAuthorizationServicesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetClientAvailabilitiesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetClientAvailabilityTemplateArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetContactTagsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetContactsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetExceptionRecordArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetExceptionTypeArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetHolidayRegionsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetHolidaysArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetJobAllocationsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetJobDependenciesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetJobOffersArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetJobProductsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetJobTagsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetJobTasksArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetJobTimeConstraintsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetJobsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetLocationResourceScoresArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetLocationsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetLoggerArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetProductsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetRecurringSchedulesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetRegionsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourceJobOffersArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourceOverrideRegionsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourceOverridesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourceRegionsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourceRequirementTagsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourceRequirementsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourceShiftBreaksArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourceShiftOffersArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourceShiftsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourceTagsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetResourcesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetScheduleTemplatesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetShiftOfferShiftsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetShiftOffersArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetShiftTagsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetShiftsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetStarterTestArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTagManagerSettingsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTagRequestArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTagsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedActivitiesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedActivityResourcesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedAttendeesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedJobAllocationsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedJobDependenciesArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedJobProductsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedJobTagsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedJobTasksArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedJobTimeConstraintsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedJobsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedResourceRequirementTagsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedResourceRequirementsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedResourceShiftsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedShiftTagsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetTemplatedShiftsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetUserRegionsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetUser_ExtArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetclientAvailabilityTemplateEntryArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetsked_BroadcastRecipientsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationGetsked_BroadcastsArgs = {
  id: Scalars['ID'];
};


export type SchemaMutationInsertAccountResourceScoresArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAccountResourceScores;
};


export type SchemaMutationInsertAccountTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAccountTags;
};


export type SchemaMutationInsertAccountsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAccounts;
};


export type SchemaMutationInsertActivitiesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewActivities;
};


export type SchemaMutationInsertActivityResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewActivityResources;
};


export type SchemaMutationInsertAdminSettingArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAdminSetting;
};


export type SchemaMutationInsertAttendeesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAttendees;
};


export type SchemaMutationInsertAvailabilitiesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAvailabilities;
};


export type SchemaMutationInsertAvailabilityPatternResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAvailabilityPatternResources;
};


export type SchemaMutationInsertAvailabilityPatternsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAvailabilityPatterns;
};


export type SchemaMutationInsertAvailabilityTemplateEntriesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAvailabilityTemplateEntries;
};


export type SchemaMutationInsertAvailabilityTemplateResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAvailabilityTemplateResources;
};


export type SchemaMutationInsertAvailabilityTemplatesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewAvailabilityTemplates;
};


export type SchemaMutationInsertClientAuthorizationArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewClientAuthorization;
};


export type SchemaMutationInsertClientAuthorizationServicesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewClientAuthorizationServices;
};


export type SchemaMutationInsertClientAvailabilitiesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewClientAvailabilities;
};


export type SchemaMutationInsertClientAvailabilityTemplateArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewClientAvailabilityTemplate;
};


export type SchemaMutationInsertContactTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewContactTags;
};


export type SchemaMutationInsertContactsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewContacts;
};


export type SchemaMutationInsertExceptionRecordArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewExceptionRecord;
};


export type SchemaMutationInsertExceptionTypeArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewExceptionType;
};


export type SchemaMutationInsertHolidayRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewHolidayRegions;
};


export type SchemaMutationInsertHolidaysArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewHolidays;
};


export type SchemaMutationInsertJobAllocationsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewJobAllocations;
};


export type SchemaMutationInsertJobDependenciesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewJobDependencies;
};


export type SchemaMutationInsertJobOffersArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewJobOffers;
};


export type SchemaMutationInsertJobProductsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewJobProducts;
};


export type SchemaMutationInsertJobTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewJobTags;
};


export type SchemaMutationInsertJobTasksArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewJobTasks;
};


export type SchemaMutationInsertJobTimeConstraintsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewJobTimeConstraints;
};


export type SchemaMutationInsertJobsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewJobs;
};


export type SchemaMutationInsertLocationResourceScoresArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewLocationResourceScores;
};


export type SchemaMutationInsertLocationsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewLocations;
};


export type SchemaMutationInsertLoggerArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewLogger;
};


export type SchemaMutationInsertProductsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewProducts;
};


export type SchemaMutationInsertRecurringSchedulesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewRecurringSchedules;
};


export type SchemaMutationInsertRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewRegions;
};


export type SchemaMutationInsertResourceJobOffersArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResourceJobOffers;
};


export type SchemaMutationInsertResourceOverrideRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResourceOverrideRegions;
};


export type SchemaMutationInsertResourceOverridesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResourceOverrides;
};


export type SchemaMutationInsertResourceRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResourceRegions;
};


export type SchemaMutationInsertResourceRequirementTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResourceRequirementTags;
};


export type SchemaMutationInsertResourceRequirementsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResourceRequirements;
};


export type SchemaMutationInsertResourceShiftBreaksArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResourceShiftBreaks;
};


export type SchemaMutationInsertResourceShiftOffersArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResourceShiftOffers;
};


export type SchemaMutationInsertResourceShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResourceShifts;
};


export type SchemaMutationInsertResourceTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResourceTags;
};


export type SchemaMutationInsertResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewResources;
};


export type SchemaMutationInsertScheduleTemplatesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewScheduleTemplates;
};


export type SchemaMutationInsertShiftOfferShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewShiftOfferShifts;
};


export type SchemaMutationInsertShiftOffersArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewShiftOffers;
};


export type SchemaMutationInsertShiftTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewShiftTags;
};


export type SchemaMutationInsertShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewShifts;
};


export type SchemaMutationInsertStarterTestArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewStarterTest;
};


export type SchemaMutationInsertTagManagerSettingsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTagManagerSettings;
};


export type SchemaMutationInsertTagRequestArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTagRequest;
};


export type SchemaMutationInsertTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTags;
};


export type SchemaMutationInsertTemplatedActivitiesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedActivities;
};


export type SchemaMutationInsertTemplatedActivityResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedActivityResources;
};


export type SchemaMutationInsertTemplatedAttendeesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedAttendees;
};


export type SchemaMutationInsertTemplatedJobAllocationsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedJobAllocations;
};


export type SchemaMutationInsertTemplatedJobDependenciesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedJobDependencies;
};


export type SchemaMutationInsertTemplatedJobProductsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedJobProducts;
};


export type SchemaMutationInsertTemplatedJobTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedJobTags;
};


export type SchemaMutationInsertTemplatedJobTasksArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedJobTasks;
};


export type SchemaMutationInsertTemplatedJobTimeConstraintsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedJobTimeConstraints;
};


export type SchemaMutationInsertTemplatedJobsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedJobs;
};


export type SchemaMutationInsertTemplatedResourceRequirementTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedResourceRequirementTags;
};


export type SchemaMutationInsertTemplatedResourceRequirementsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedResourceRequirements;
};


export type SchemaMutationInsertTemplatedResourceShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedResourceShifts;
};


export type SchemaMutationInsertTemplatedShiftTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedShiftTags;
};


export type SchemaMutationInsertTemplatedShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewTemplatedShifts;
};


export type SchemaMutationInsertUserRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewUserRegions;
};


export type SchemaMutationInsertUser_ExtArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewUser_Ext;
};


export type SchemaMutationInsertclientAvailabilityTemplateEntryArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: NewclientAvailabilityTemplateEntry;
};


export type SchemaMutationInsertsked_BroadcastRecipientsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: Newsked_BroadcastRecipients;
};


export type SchemaMutationInsertsked_BroadcastsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: Newsked_Broadcasts;
};


export type SchemaMutationUpdateAccountResourceScoresArgs = {
  input: UpdateAccountResourceScores;
};


export type SchemaMutationUpdateAccountTagsArgs = {
  input: UpdateAccountTags;
};


export type SchemaMutationUpdateAccountsArgs = {
  input: UpdateAccounts;
};


export type SchemaMutationUpdateActivitiesArgs = {
  input: UpdateActivities;
};


export type SchemaMutationUpdateActivityResourcesArgs = {
  input: UpdateActivityResources;
};


export type SchemaMutationUpdateAdminSettingArgs = {
  input: UpdateAdminSetting;
};


export type SchemaMutationUpdateAttendeesArgs = {
  input: UpdateAttendees;
};


export type SchemaMutationUpdateAvailabilitiesArgs = {
  input: UpdateAvailabilities;
};


export type SchemaMutationUpdateAvailabilityPatternResourcesArgs = {
  input: UpdateAvailabilityPatternResources;
};


export type SchemaMutationUpdateAvailabilityPatternsArgs = {
  input: UpdateAvailabilityPatterns;
};


export type SchemaMutationUpdateAvailabilityTemplateEntriesArgs = {
  input: UpdateAvailabilityTemplateEntries;
};


export type SchemaMutationUpdateAvailabilityTemplateResourcesArgs = {
  input: UpdateAvailabilityTemplateResources;
};


export type SchemaMutationUpdateAvailabilityTemplatesArgs = {
  input: UpdateAvailabilityTemplates;
};


export type SchemaMutationUpdateClientAuthorizationArgs = {
  input: UpdateClientAuthorization;
};


export type SchemaMutationUpdateClientAuthorizationServicesArgs = {
  input: UpdateClientAuthorizationServices;
};


export type SchemaMutationUpdateClientAvailabilitiesArgs = {
  input: UpdateClientAvailabilities;
};


export type SchemaMutationUpdateClientAvailabilityTemplateArgs = {
  input: UpdateClientAvailabilityTemplate;
};


export type SchemaMutationUpdateContactTagsArgs = {
  input: UpdateContactTags;
};


export type SchemaMutationUpdateContactsArgs = {
  input: UpdateContacts;
};


export type SchemaMutationUpdateExceptionRecordArgs = {
  input: UpdateExceptionRecord;
};


export type SchemaMutationUpdateExceptionTypeArgs = {
  input: UpdateExceptionType;
};


export type SchemaMutationUpdateHolidayRegionsArgs = {
  input: UpdateHolidayRegions;
};


export type SchemaMutationUpdateHolidaysArgs = {
  input: UpdateHolidays;
};


export type SchemaMutationUpdateJobAllocationsArgs = {
  input: UpdateJobAllocations;
};


export type SchemaMutationUpdateJobDependenciesArgs = {
  input: UpdateJobDependencies;
};


export type SchemaMutationUpdateJobOffersArgs = {
  input: UpdateJobOffers;
};


export type SchemaMutationUpdateJobProductsArgs = {
  input: UpdateJobProducts;
};


export type SchemaMutationUpdateJobTagsArgs = {
  input: UpdateJobTags;
};


export type SchemaMutationUpdateJobTasksArgs = {
  input: UpdateJobTasks;
};


export type SchemaMutationUpdateJobTimeConstraintsArgs = {
  input: UpdateJobTimeConstraints;
};


export type SchemaMutationUpdateJobsArgs = {
  input: UpdateJobs;
};


export type SchemaMutationUpdateLocationResourceScoresArgs = {
  input: UpdateLocationResourceScores;
};


export type SchemaMutationUpdateLocationsArgs = {
  input: UpdateLocations;
};


export type SchemaMutationUpdateLoggerArgs = {
  input: UpdateLogger;
};


export type SchemaMutationUpdateProductsArgs = {
  input: UpdateProducts;
};


export type SchemaMutationUpdateRecurringSchedulesArgs = {
  input: UpdateRecurringSchedules;
};


export type SchemaMutationUpdateRegionsArgs = {
  input: UpdateRegions;
};


export type SchemaMutationUpdateResourceJobOffersArgs = {
  input: UpdateResourceJobOffers;
};


export type SchemaMutationUpdateResourceOverrideRegionsArgs = {
  input: UpdateResourceOverrideRegions;
};


export type SchemaMutationUpdateResourceOverridesArgs = {
  input: UpdateResourceOverrides;
};


export type SchemaMutationUpdateResourceRegionsArgs = {
  input: UpdateResourceRegions;
};


export type SchemaMutationUpdateResourceRequirementTagsArgs = {
  input: UpdateResourceRequirementTags;
};


export type SchemaMutationUpdateResourceRequirementsArgs = {
  input: UpdateResourceRequirements;
};


export type SchemaMutationUpdateResourceShiftBreaksArgs = {
  input: UpdateResourceShiftBreaks;
};


export type SchemaMutationUpdateResourceShiftOffersArgs = {
  input: UpdateResourceShiftOffers;
};


export type SchemaMutationUpdateResourceShiftsArgs = {
  input: UpdateResourceShifts;
};


export type SchemaMutationUpdateResourceTagsArgs = {
  input: UpdateResourceTags;
};


export type SchemaMutationUpdateResourcesArgs = {
  input: UpdateResources;
};


export type SchemaMutationUpdateScheduleTemplatesArgs = {
  input: UpdateScheduleTemplates;
};


export type SchemaMutationUpdateShiftOfferShiftsArgs = {
  input: UpdateShiftOfferShifts;
};


export type SchemaMutationUpdateShiftOffersArgs = {
  input: UpdateShiftOffers;
};


export type SchemaMutationUpdateShiftTagsArgs = {
  input: UpdateShiftTags;
};


export type SchemaMutationUpdateShiftsArgs = {
  input: UpdateShifts;
};


export type SchemaMutationUpdateStarterTestArgs = {
  input: UpdateStarterTest;
};


export type SchemaMutationUpdateTagManagerSettingsArgs = {
  input: UpdateTagManagerSettings;
};


export type SchemaMutationUpdateTagRequestArgs = {
  input: UpdateTagRequest;
};


export type SchemaMutationUpdateTagsArgs = {
  input: UpdateTags;
};


export type SchemaMutationUpdateTemplatedActivitiesArgs = {
  input: UpdateTemplatedActivities;
};


export type SchemaMutationUpdateTemplatedActivityResourcesArgs = {
  input: UpdateTemplatedActivityResources;
};


export type SchemaMutationUpdateTemplatedAttendeesArgs = {
  input: UpdateTemplatedAttendees;
};


export type SchemaMutationUpdateTemplatedJobAllocationsArgs = {
  input: UpdateTemplatedJobAllocations;
};


export type SchemaMutationUpdateTemplatedJobDependenciesArgs = {
  input: UpdateTemplatedJobDependencies;
};


export type SchemaMutationUpdateTemplatedJobProductsArgs = {
  input: UpdateTemplatedJobProducts;
};


export type SchemaMutationUpdateTemplatedJobTagsArgs = {
  input: UpdateTemplatedJobTags;
};


export type SchemaMutationUpdateTemplatedJobTasksArgs = {
  input: UpdateTemplatedJobTasks;
};


export type SchemaMutationUpdateTemplatedJobTimeConstraintsArgs = {
  input: UpdateTemplatedJobTimeConstraints;
};


export type SchemaMutationUpdateTemplatedJobsArgs = {
  input: UpdateTemplatedJobs;
};


export type SchemaMutationUpdateTemplatedResourceRequirementTagsArgs = {
  input: UpdateTemplatedResourceRequirementTags;
};


export type SchemaMutationUpdateTemplatedResourceRequirementsArgs = {
  input: UpdateTemplatedResourceRequirements;
};


export type SchemaMutationUpdateTemplatedResourceShiftsArgs = {
  input: UpdateTemplatedResourceShifts;
};


export type SchemaMutationUpdateTemplatedShiftTagsArgs = {
  input: UpdateTemplatedShiftTags;
};


export type SchemaMutationUpdateTemplatedShiftsArgs = {
  input: UpdateTemplatedShifts;
};


export type SchemaMutationUpdateUserRegionsArgs = {
  input: UpdateUserRegions;
};


export type SchemaMutationUpdateUser_ExtArgs = {
  input: UpdateUser_Ext;
};


export type SchemaMutationUpdateclientAvailabilityTemplateEntryArgs = {
  input: UpdateclientAvailabilityTemplateEntry;
};


export type SchemaMutationUpdatesked_BroadcastRecipientsArgs = {
  input: Updatesked_BroadcastRecipients;
};


export type SchemaMutationUpdatesked_BroadcastsArgs = {
  input: Updatesked_Broadcasts;
};


export type SchemaMutationUpsertAccountResourceScoresArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAccountResourceScores;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAccountTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAccountTags;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAccountsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAccounts;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertActivitiesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertActivities;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertActivityResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertActivityResources;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAdminSettingArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAdminSetting;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAttendeesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAttendees;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAvailabilitiesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAvailabilities;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAvailabilityPatternResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAvailabilityPatternResources;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAvailabilityPatternsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAvailabilityPatterns;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAvailabilityTemplateEntriesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAvailabilityTemplateEntries;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAvailabilityTemplateResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAvailabilityTemplateResources;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertAvailabilityTemplatesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertAvailabilityTemplates;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertClientAuthorizationArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertClientAuthorization;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertClientAuthorizationServicesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertClientAuthorizationServices;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertClientAvailabilitiesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertClientAvailabilities;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertClientAvailabilityTemplateArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertClientAvailabilityTemplate;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertContactTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertContactTags;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertContactsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertContacts;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertExceptionRecordArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertExceptionRecord;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertExceptionTypeArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertExceptionType;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertHolidayRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertHolidayRegions;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertHolidaysArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertHolidays;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertJobAllocationsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertJobAllocations;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertJobDependenciesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertJobDependencies;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertJobOffersArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertJobOffers;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertJobProductsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertJobProducts;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertJobTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertJobTags;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertJobTasksArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertJobTasks;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertJobTimeConstraintsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertJobTimeConstraints;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertJobsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertJobs;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertLocationResourceScoresArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertLocationResourceScores;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertLocationsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertLocations;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertLoggerArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertLogger;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertProductsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertProducts;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertRecurringSchedulesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertRecurringSchedules;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertRegions;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourceJobOffersArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResourceJobOffers;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourceOverrideRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResourceOverrideRegions;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourceOverridesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResourceOverrides;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourceRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResourceRegions;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourceRequirementTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResourceRequirementTags;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourceRequirementsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResourceRequirements;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourceShiftBreaksArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResourceShiftBreaks;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourceShiftOffersArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResourceShiftOffers;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourceShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResourceShifts;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourceTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResourceTags;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertResources;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertScheduleTemplatesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertScheduleTemplates;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertShiftOfferShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertShiftOfferShifts;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertShiftOffersArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertShiftOffers;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertShiftTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertShiftTags;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertShifts;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertStarterTestArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertStarterTest;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTagManagerSettingsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTagManagerSettings;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTagRequestArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTagRequest;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTags;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedActivitiesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedActivities;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedActivityResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedActivityResources;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedAttendeesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedAttendees;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedJobAllocationsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedJobAllocations;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedJobDependenciesArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedJobDependencies;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedJobProductsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedJobProducts;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedJobTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedJobTags;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedJobTasksArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedJobTasks;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedJobTimeConstraintsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedJobTimeConstraints;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedJobsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedJobs;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedResourceRequirementTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedResourceRequirementTags;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedResourceRequirementsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedResourceRequirements;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedResourceShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedResourceShifts;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedShiftTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedShiftTags;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertTemplatedShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertTemplatedShifts;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertUserRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertUserRegions;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertUser_ExtArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertUser_Ext;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertclientAvailabilityTemplateEntryArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: UpsertclientAvailabilityTemplateEntry;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertsked_BroadcastRecipientsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: Upsertsked_BroadcastRecipients;
  keyField: Scalars['String'];
};


export type SchemaMutationUpsertsked_BroadcastsArgs = {
  idAlias?: InputMaybe<Scalars['ID']>;
  input: Upsertsked_Broadcasts;
  keyField: Scalars['String'];
};

export type SchemaSubscriptionAccountResourceScores = {
  __typename?: 'SchemaSubscriptionAccountResourceScores';
  AccountId: Scalars['ID'];
  Blacklisted: Scalars['Boolean'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  UID: Scalars['ID'];
  Whitelisted: Scalars['Boolean'];
};

export type SchemaSubscriptionAccountTags = {
  __typename?: 'SchemaSubscriptionAccountTags';
  AccountId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SchemaSubscriptionAccounts = {
  __typename?: 'SchemaSubscriptionAccounts';
  ACId?: Maybe<Scalars['ID']>;
  AVPId?: Maybe<Scalars['ID']>;
  ActiveFromDate?: Maybe<Scalars['LocalDate']>;
  ActiveThruDate?: Maybe<Scalars['LocalDate']>;
  ActualStartOfCareDate?: Maybe<Scalars['LocalDate']>;
  BillingCity?: Maybe<Scalars['String']>;
  BillingPostalCode?: Maybe<Scalars['String']>;
  BillingState?: Maybe<Scalars['String']>;
  BillingStreet?: Maybe<Scalars['String']>;
  CaseID?: Maybe<Scalars['String']>;
  CaseProgressionStatus?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DateOfBirth?: Maybe<Scalars['LocalDate']>;
  DefaultLocationId?: Maybe<Scalars['ID']>;
  DischargeDate?: Maybe<Scalars['Instant']>;
  Division?: Maybe<Scalars['String']>;
  ExternalClientID?: Maybe<Scalars['String']>;
  FSMId?: Maybe<Scalars['ID']>;
  Fax?: Maybe<Scalars['String']>;
  Gender?: Maybe<Scalars['String']>;
  HoldDate?: Maybe<Scalars['LocalDate']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  MRNumber?: Maybe<Scalars['String']>;
  Name: Scalars['String'];
  NeedToRecalculateJobsLocation: Scalars['Boolean'];
  ODId?: Maybe<Scalars['ID']>;
  PayerLabel?: Maybe<Scalars['String']>;
  Phone?: Maybe<Scalars['String']>;
  PlannedStartOfCareDate?: Maybe<Scalars['LocalDate']>;
  PreferredTechnician?: Maybe<Scalars['String']>;
  RCDId?: Maybe<Scalars['ID']>;
  Rank?: Maybe<Scalars['BigDecimal']>;
  RegionId?: Maybe<Scalars['ID']>;
  RequiresWhitelist: Scalars['Boolean'];
  ResumeServiceDate?: Maybe<Scalars['LocalDate']>;
  SCId?: Maybe<Scalars['ID']>;
  ShippingCity?: Maybe<Scalars['String']>;
  ShippingPostalCode?: Maybe<Scalars['String']>;
  ShippingState?: Maybe<Scalars['String']>;
  ShippingStreet?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionActivities = {
  __typename?: 'SchemaSubscriptionActivities';
  Address?: Maybe<Scalars['String']>;
  CopiedFromId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End: Scalars['Instant'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  Name: Scalars['String'];
  Notes?: Maybe<Scalars['String']>;
  Quantity?: Maybe<Scalars['Int']>;
  ResourceId?: Maybe<Scalars['ID']>;
  ScheduleTemplateId?: Maybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  TemplatedActivityId?: Maybe<Scalars['ID']>;
  Timezone?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionActivityResources = {
  __typename?: 'SchemaSubscriptionActivityResources';
  ActivityId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionAdminSetting = {
  __typename?: 'SchemaSubscriptionAdminSetting';
  AllDayEndTime?: Maybe<Scalars['String']>;
  AllDayStartTime?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ReadOnlyAvailabilityForm?: Maybe<Scalars['Boolean']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionAttendees = {
  __typename?: 'SchemaSubscriptionAttendees';
  CancelReason?: Maybe<Scalars['String']>;
  ContactId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Status: Scalars['String'];
  TimeCancelled?: Maybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionAvailabilities = {
  __typename?: 'SchemaSubscriptionAvailabilities';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Finish: Scalars['Instant'];
  IsAvailable: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Notes?: Maybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  Status?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionAvailabilityPatternResources = {
  __typename?: 'SchemaSubscriptionAvailabilityPatternResources';
  AvailabilityPatternId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End?: Maybe<Scalars['Instant']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  RepeatEvery?: Maybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  Status?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionAvailabilityPatterns = {
  __typename?: 'SchemaSubscriptionAvailabilityPatterns';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Hash: Scalars['String'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Pattern: Scalars['String'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionAvailabilityTemplateEntries = {
  __typename?: 'SchemaSubscriptionAvailabilityTemplateEntries';
  AvailabilityTemplateId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  FinishTime: Scalars['Int'];
  IsAvailable: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  StartTime: Scalars['Int'];
  UID: Scalars['ID'];
  Weekday: Scalars['String'];
};

export type SchemaSubscriptionAvailabilityTemplateResources = {
  __typename?: 'SchemaSubscriptionAvailabilityTemplateResources';
  AvailabilityTemplateId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Migrated: Scalars['Boolean'];
  ResourceId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionAvailabilityTemplates = {
  __typename?: 'SchemaSubscriptionAvailabilityTemplates';
  AvailabilityPatternId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Finish?: Maybe<Scalars['LocalDate']>;
  Global: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  RepeatEvery?: Maybe<Scalars['String']>;
  Start?: Maybe<Scalars['LocalDate']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionClientAuthorization = {
  __typename?: 'SchemaSubscriptionClientAuthorization';
  AccountId?: Maybe<Scalars['ID']>;
  AuthorizationEffectiveDate?: Maybe<Scalars['LocalDate']>;
  AuthorizationExpirationDate?: Maybe<Scalars['LocalDate']>;
  AuthorizationNotes?: Maybe<Scalars['String']>;
  AuthorizationStatus?: Maybe<Scalars['String']>;
  CaseProgressionStatus?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DummyTestingField?: Maybe<Scalars['BigDecimal']>;
  ExternalID?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  RegionId?: Maybe<Scalars['ID']>;
  TotalAuthorizedHours?: Maybe<Scalars['BigDecimal']>;
  TotalScheduledAuthorizedHours?: Maybe<Scalars['BigDecimal']>;
  TotalUsedAuthorizedHours?: Maybe<Scalars['BigDecimal']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionClientAuthorizationServices = {
  __typename?: 'SchemaSubscriptionClientAuthorizationServices';
  AuthorizedHoursPerWeek?: Maybe<Scalars['BigDecimal']>;
  ClientAuthorizationId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DummyField?: Maybe<Scalars['BigDecimal']>;
  ExternalID?: Maybe<Scalars['String']>;
  FamilyAgreedUpon?: Maybe<Scalars['BigDecimal']>;
  HoursRemainingAfterChargeCreation?: Maybe<Scalars['BigDecimal']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  ServiceType?: Maybe<Scalars['String']>;
  TotalAuthorizedServiceHours?: Maybe<Scalars['BigDecimal']>;
  TotalScheduledServiceHours?: Maybe<Scalars['BigDecimal']>;
  TotalUsedServiceHours?: Maybe<Scalars['BigDecimal']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionClientAvailabilities = {
  __typename?: 'SchemaSubscriptionClientAvailabilities';
  AccountId?: Maybe<Scalars['ID']>;
  ContactId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End: Scalars['Instant'];
  IsAvailable: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  PreferredEnd?: Maybe<Scalars['Instant']>;
  PreferredStart?: Maybe<Scalars['Instant']>;
  RecurringScheduleId?: Maybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionClientAvailabilityTemplate = {
  __typename?: 'SchemaSubscriptionClientAvailabilityTemplate';
  AccountId?: Maybe<Scalars['ID']>;
  AdjustmentType?: Maybe<Scalars['String']>;
  AllDay: Scalars['Boolean'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DatesOfMonth?: Maybe<Array<Scalars['String']>>;
  DaysOfMonth?: Maybe<Array<Scalars['String']>>;
  DaysOfWeek?: Maybe<Scalars['String']>;
  DaysOfYear?: Maybe<Scalars['String']>;
  EndDate?: Maybe<Scalars['LocalDate']>;
  EndTime?: Maybe<Scalars['LocalTime']>;
  Label?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  MonthsOfYear?: Maybe<Array<Scalars['String']>>;
  Note?: Maybe<Scalars['String']>;
  Pattern?: Maybe<Scalars['String']>;
  StartDate?: Maybe<Scalars['LocalDate']>;
  StartTime?: Maybe<Scalars['LocalTime']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionContactTags = {
  __typename?: 'SchemaSubscriptionContactTags';
  ContactId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SchemaSubscriptionContacts = {
  __typename?: 'SchemaSubscriptionContacts';
  AccountId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Email?: Maybe<Scalars['String']>;
  FirstName?: Maybe<Scalars['String']>;
  FullName: Scalars['String'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LastName: Scalars['String'];
  MailingCity?: Maybe<Scalars['String']>;
  MailingPostalCode?: Maybe<Scalars['String']>;
  MailingState?: Maybe<Scalars['String']>;
  MailingStreet?: Maybe<Scalars['String']>;
  MobilePhone?: Maybe<Scalars['String']>;
  OtherCity?: Maybe<Scalars['String']>;
  OtherPostalCode?: Maybe<Scalars['String']>;
  OtherState?: Maybe<Scalars['String']>;
  OtherStreet?: Maybe<Scalars['String']>;
  Phone?: Maybe<Scalars['String']>;
  RegionId?: Maybe<Scalars['ID']>;
  Title?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionExceptionRecord = {
  __typename?: 'SchemaSubscriptionExceptionRecord';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  ExceptionId?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  RuleId?: Maybe<Scalars['String']>;
  SourceId?: Maybe<Scalars['String']>;
  SourceType?: Maybe<Scalars['String']>;
  TargetId?: Maybe<Scalars['String']>;
  TargetType?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionExceptionType = {
  __typename?: 'SchemaSubscriptionExceptionType';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  DescriptionTwo?: Maybe<Scalars['String']>;
  ExceptionType: Scalars['String'];
  ExceptionType2: Scalars['String'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionHolidayRegions = {
  __typename?: 'SchemaSubscriptionHolidayRegions';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  HolidayId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  RegionId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionHolidays = {
  __typename?: 'SchemaSubscriptionHolidays';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndDate: Scalars['LocalDate'];
  Global: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  StartDate: Scalars['LocalDate'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionJobAllocations = {
  __typename?: 'SchemaSubscriptionJobAllocations';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DeclineDescription?: Maybe<Scalars['String']>;
  DeclineReason?: Maybe<Scalars['String']>;
  Duration?: Maybe<Scalars['Duration']>;
  End?: Maybe<Scalars['Instant']>;
  EstimatedTravelDistance?: Maybe<Scalars['BigDecimal']>;
  EstimatedTravelTime?: Maybe<Scalars['Duration']>;
  GeoCheckedInLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoCheckedInLongitude?: Maybe<Scalars['BigDecimal']>;
  GeoCompletedLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoCompletedLongitude?: Maybe<Scalars['BigDecimal']>;
  GeoInProgressLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoInProgressLongitude?: Maybe<Scalars['BigDecimal']>;
  GeoStartTravelLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoStartTravelLongitude?: Maybe<Scalars['BigDecimal']>;
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  NotificationType?: Maybe<Scalars['String']>;
  PhoneResponse?: Maybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  ResourceRequirementId?: Maybe<Scalars['ID']>;
  Start?: Maybe<Scalars['Instant']>;
  Status: Scalars['String'];
  TeamLeader: Scalars['Boolean'];
  TimeCheckedIn?: Maybe<Scalars['Instant']>;
  TimeCompleted?: Maybe<Scalars['Instant']>;
  TimeInProgress?: Maybe<Scalars['Instant']>;
  TimePublished?: Maybe<Scalars['Instant']>;
  TimeResponded?: Maybe<Scalars['Instant']>;
  TimeStartTravel?: Maybe<Scalars['Instant']>;
  TravelDistance?: Maybe<Scalars['BigDecimal']>;
  TravelTime?: Maybe<Scalars['Duration']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionJobDependencies = {
  __typename?: 'SchemaSubscriptionJobDependencies';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  FromAnchor: Scalars['String'];
  FromJobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ToAnchor: Scalars['String'];
  ToAnchorMaxOffsetMinutes?: Maybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: Maybe<Scalars['Int']>;
  ToJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionJobOffers = {
  __typename?: 'SchemaSubscriptionJobOffers';
  CreatedById: Scalars['ID'];
  CreatedByResource: Scalars['Boolean'];
  CreatedDate: Scalars['Instant'];
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceRequirementId?: Maybe<Scalars['ID']>;
  Status: Scalars['String'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionJobProducts = {
  __typename?: 'SchemaSubscriptionJobProducts';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  ProductId?: Maybe<Scalars['ID']>;
  ProductName?: Maybe<Scalars['String']>;
  Qty: Scalars['BigDecimal'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionJobTags = {
  __typename?: 'SchemaSubscriptionJobTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SchemaSubscriptionJobTasks = {
  __typename?: 'SchemaSubscriptionJobTasks';
  Completed: Scalars['Boolean'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Seq: Scalars['Int'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionJobTimeConstraints = {
  __typename?: 'SchemaSubscriptionJobTimeConstraints';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndBefore?: Maybe<Scalars['Instant']>;
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  StartAfter?: Maybe<Scalars['Instant']>;
  StartBefore?: Maybe<Scalars['Instant']>;
  Type: Scalars['String'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionJobs = {
  __typename?: 'SchemaSubscriptionJobs';
  AbortReason?: Maybe<Scalars['String']>;
  AccountId?: Maybe<Scalars['ID']>;
  ActualEnd?: Maybe<Scalars['Instant']>;
  ActualStart?: Maybe<Scalars['Instant']>;
  Address?: Maybe<Scalars['String']>;
  AuthorizationServiceId?: Maybe<Scalars['ID']>;
  AuthorizedHoursPerWeek?: Maybe<Scalars['BigDecimal']>;
  AutoSchedule: Scalars['Boolean'];
  CanBeDeclined: Scalars['Boolean'];
  ClearOfExceptions: Scalars['Boolean'];
  ClientAuthorizationId?: Maybe<Scalars['ID']>;
  CompletionNotes?: Maybe<Scalars['String']>;
  ContactId?: Maybe<Scalars['ID']>;
  CopiedFromId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  CustomerConfirmationStatus?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  End?: Maybe<Scalars['Instant']>;
  EstimatedEnd?: Maybe<Scalars['Instant']>;
  EstimatedStart?: Maybe<Scalars['Instant']>;
  FamilyAgreedUpon?: Maybe<Scalars['BigDecimal']>;
  FollowupReason?: Maybe<Scalars['String']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  IsGroupEvent: Scalars['Boolean'];
  JobAllocationCount: Scalars['Int'];
  JobAllocationTimeSource: Scalars['Boolean'];
  JobStatus: Scalars['String'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  LocationType?: Maybe<Scalars['String']>;
  Locked: Scalars['Boolean'];
  MaxAttendees?: Maybe<Scalars['Int']>;
  MinAttendees?: Maybe<Scalars['Int']>;
  Name: Scalars['String'];
  NotesComments?: Maybe<Scalars['String']>;
  NotifyBy?: Maybe<Scalars['Instant']>;
  NotifyPeriod?: Maybe<Scalars['Int']>;
  ParentId?: Maybe<Scalars['ID']>;
  Quantity?: Maybe<Scalars['Int']>;
  RecurringScheduleId?: Maybe<Scalars['ID']>;
  RegionId: Scalars['ID'];
  ScheduleTemplateId?: Maybe<Scalars['ID']>;
  Start?: Maybe<Scalars['Instant']>;
  TemplatedJobId?: Maybe<Scalars['ID']>;
  Timezone: Scalars['String'];
  TotalAuthorizedServiceHours?: Maybe<Scalars['BigDecimal']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
  Urgency?: Maybe<Scalars['String']>;
  VirtualMeetingId?: Maybe<Scalars['String']>;
  VirtualMeetingInfo?: Maybe<Scalars['String']>;
  VirtualMeetingURL?: Maybe<Scalars['String']>;
};

export type SchemaSubscriptionLocationResourceScores = {
  __typename?: 'SchemaSubscriptionLocationResourceScores';
  Blacklisted: Scalars['Boolean'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId: Scalars['ID'];
  ResourceId: Scalars['ID'];
  UID: Scalars['ID'];
  Whitelisted: Scalars['Boolean'];
};

export type SchemaSubscriptionLocations = {
  __typename?: 'SchemaSubscriptionLocations';
  AccountId?: Maybe<Scalars['ID']>;
  Address?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Default?: Maybe<Scalars['Boolean']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  RegionId?: Maybe<Scalars['ID']>;
  RequiresWhitelist: Scalars['Boolean'];
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionLogger = {
  __typename?: 'SchemaSubscriptionLogger';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Message?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionNotification = {
  operation: SchemaSubscriptionOp;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationAccountResourceScores = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationAccountResourceScores';
  data: SchemaSubscriptionAccountResourceScores;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionAccountResourceScores;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationAccountTags = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationAccountTags';
  data: SchemaSubscriptionAccountTags;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionAccountTags;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationAccounts = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationAccounts';
  data: SchemaSubscriptionAccounts;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionAccounts;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationActivities = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationActivities';
  data: SchemaSubscriptionActivities;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionActivities;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationActivityResources = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationActivityResources';
  data: SchemaSubscriptionActivityResources;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionActivityResources;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationAdminSetting = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationAdminSetting';
  data: SchemaSubscriptionAdminSetting;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionAdminSetting;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationAttendees = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationAttendees';
  data: SchemaSubscriptionAttendees;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionAttendees;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationAvailabilities = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationAvailabilities';
  data: SchemaSubscriptionAvailabilities;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionAvailabilities;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationAvailabilityPatternResources = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationAvailabilityPatternResources';
  data: SchemaSubscriptionAvailabilityPatternResources;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionAvailabilityPatternResources;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationAvailabilityPatterns = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationAvailabilityPatterns';
  data: SchemaSubscriptionAvailabilityPatterns;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionAvailabilityPatterns;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationAvailabilityTemplateEntries = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationAvailabilityTemplateEntries';
  data: SchemaSubscriptionAvailabilityTemplateEntries;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionAvailabilityTemplateEntries;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationAvailabilityTemplateResources = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationAvailabilityTemplateResources';
  data: SchemaSubscriptionAvailabilityTemplateResources;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionAvailabilityTemplateResources;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationAvailabilityTemplates = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationAvailabilityTemplates';
  data: SchemaSubscriptionAvailabilityTemplates;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionAvailabilityTemplates;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationClientAuthorization = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationClientAuthorization';
  data: SchemaSubscriptionClientAuthorization;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionClientAuthorization;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationClientAuthorizationServices = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationClientAuthorizationServices';
  data: SchemaSubscriptionClientAuthorizationServices;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionClientAuthorizationServices;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationClientAvailabilities = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationClientAvailabilities';
  data: SchemaSubscriptionClientAvailabilities;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionClientAvailabilities;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationClientAvailabilityTemplate = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationClientAvailabilityTemplate';
  data: SchemaSubscriptionClientAvailabilityTemplate;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionClientAvailabilityTemplate;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationContactTags = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationContactTags';
  data: SchemaSubscriptionContactTags;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionContactTags;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationContacts = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationContacts';
  data: SchemaSubscriptionContacts;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionContacts;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationExceptionRecord = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationExceptionRecord';
  data: SchemaSubscriptionExceptionRecord;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionExceptionRecord;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationExceptionType = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationExceptionType';
  data: SchemaSubscriptionExceptionType;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionExceptionType;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationHolidayRegions = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationHolidayRegions';
  data: SchemaSubscriptionHolidayRegions;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionHolidayRegions;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationHolidays = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationHolidays';
  data: SchemaSubscriptionHolidays;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionHolidays;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationJobAllocations = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationJobAllocations';
  data: SchemaSubscriptionJobAllocations;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionJobAllocations;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationJobDependencies = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationJobDependencies';
  data: SchemaSubscriptionJobDependencies;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionJobDependencies;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationJobOffers = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationJobOffers';
  data: SchemaSubscriptionJobOffers;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionJobOffers;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationJobProducts = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationJobProducts';
  data: SchemaSubscriptionJobProducts;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionJobProducts;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationJobTags = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationJobTags';
  data: SchemaSubscriptionJobTags;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionJobTags;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationJobTasks = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationJobTasks';
  data: SchemaSubscriptionJobTasks;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionJobTasks;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationJobTimeConstraints = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationJobTimeConstraints';
  data: SchemaSubscriptionJobTimeConstraints;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionJobTimeConstraints;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationJobs = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationJobs';
  data: SchemaSubscriptionJobs;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionJobs;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationLocationResourceScores = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationLocationResourceScores';
  data: SchemaSubscriptionLocationResourceScores;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionLocationResourceScores;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationLocations = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationLocations';
  data: SchemaSubscriptionLocations;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionLocations;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationLogger = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationLogger';
  data: SchemaSubscriptionLogger;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionLogger;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationProducts = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationProducts';
  data: SchemaSubscriptionProducts;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionProducts;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationRecurringSchedules = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationRecurringSchedules';
  data: SchemaSubscriptionRecurringSchedules;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionRecurringSchedules;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationRegions = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationRegions';
  data: SchemaSubscriptionRegions;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionRegions;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationResourceJobOffers = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationResourceJobOffers';
  data: SchemaSubscriptionResourceJobOffers;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionResourceJobOffers;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationResourceOverrideRegions = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationResourceOverrideRegions';
  data: SchemaSubscriptionResourceOverrideRegions;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionResourceOverrideRegions;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationResourceOverrides = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationResourceOverrides';
  data: SchemaSubscriptionResourceOverrides;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionResourceOverrides;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationResourceRegions = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationResourceRegions';
  data: SchemaSubscriptionResourceRegions;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionResourceRegions;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationResourceRequirementTags = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationResourceRequirementTags';
  data: SchemaSubscriptionResourceRequirementTags;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionResourceRequirementTags;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationResourceRequirements = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationResourceRequirements';
  data: SchemaSubscriptionResourceRequirements;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionResourceRequirements;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationResourceShiftBreaks = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationResourceShiftBreaks';
  data: SchemaSubscriptionResourceShiftBreaks;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionResourceShiftBreaks;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationResourceShiftOffers = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationResourceShiftOffers';
  data: SchemaSubscriptionResourceShiftOffers;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionResourceShiftOffers;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationResourceShifts = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationResourceShifts';
  data: SchemaSubscriptionResourceShifts;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionResourceShifts;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationResourceTags = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationResourceTags';
  data: SchemaSubscriptionResourceTags;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionResourceTags;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationResources = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationResources';
  data: SchemaSubscriptionResources;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionResources;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationScheduleTemplates = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationScheduleTemplates';
  data: SchemaSubscriptionScheduleTemplates;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionScheduleTemplates;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationShiftOfferShifts = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationShiftOfferShifts';
  data: SchemaSubscriptionShiftOfferShifts;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionShiftOfferShifts;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationShiftOffers = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationShiftOffers';
  data: SchemaSubscriptionShiftOffers;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionShiftOffers;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationShiftTags = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationShiftTags';
  data: SchemaSubscriptionShiftTags;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionShiftTags;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationShifts = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationShifts';
  data: SchemaSubscriptionShifts;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionShifts;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationStarterTest = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationStarterTest';
  data: SchemaSubscriptionStarterTest;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionStarterTest;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTagManagerSettings = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTagManagerSettings';
  data: SchemaSubscriptionTagManagerSettings;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTagManagerSettings;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTagRequest = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTagRequest';
  data: SchemaSubscriptionTagRequest;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTagRequest;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTags = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTags';
  data: SchemaSubscriptionTags;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTags;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTemplatedActivities = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTemplatedActivities';
  data: SchemaSubscriptionTemplatedActivities;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTemplatedActivities;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTemplatedActivityResources = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTemplatedActivityResources';
  data: SchemaSubscriptionTemplatedActivityResources;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTemplatedActivityResources;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTemplatedAttendees = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTemplatedAttendees';
  data: SchemaSubscriptionTemplatedAttendees;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTemplatedAttendees;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTemplatedJobAllocations = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTemplatedJobAllocations';
  data: SchemaSubscriptionTemplatedJobAllocations;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTemplatedJobAllocations;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTemplatedJobDependencies = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTemplatedJobDependencies';
  data: SchemaSubscriptionTemplatedJobDependencies;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTemplatedJobDependencies;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTemplatedJobProducts = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTemplatedJobProducts';
  data: SchemaSubscriptionTemplatedJobProducts;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTemplatedJobProducts;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTemplatedJobTags = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTemplatedJobTags';
  data: SchemaSubscriptionTemplatedJobTags;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTemplatedJobTags;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTemplatedJobTasks = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTemplatedJobTasks';
  data: SchemaSubscriptionTemplatedJobTasks;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTemplatedJobTasks;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTemplatedJobTimeConstraints = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTemplatedJobTimeConstraints';
  data: SchemaSubscriptionTemplatedJobTimeConstraints;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTemplatedJobTimeConstraints;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTemplatedJobs = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTemplatedJobs';
  data: SchemaSubscriptionTemplatedJobs;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTemplatedJobs;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTemplatedResourceRequirementTags = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTemplatedResourceRequirementTags';
  data: SchemaSubscriptionTemplatedResourceRequirementTags;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTemplatedResourceRequirementTags;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTemplatedResourceRequirements = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTemplatedResourceRequirements';
  data: SchemaSubscriptionTemplatedResourceRequirements;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTemplatedResourceRequirements;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTemplatedResourceShifts = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTemplatedResourceShifts';
  data: SchemaSubscriptionTemplatedResourceShifts;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTemplatedResourceShifts;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTemplatedShiftTags = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTemplatedShiftTags';
  data: SchemaSubscriptionTemplatedShiftTags;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTemplatedShiftTags;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationTemplatedShifts = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationTemplatedShifts';
  data: SchemaSubscriptionTemplatedShifts;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionTemplatedShifts;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationUserRegions = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationUserRegions';
  data: SchemaSubscriptionUserRegions;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionUserRegions;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationUser_Ext = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationUser_Ext';
  data: SchemaSubscriptionUser_Ext;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionUser_Ext;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationUsers = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationUsers';
  data: SchemaSubscriptionUsers;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionUsers;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationclientAvailabilityTemplateEntry = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationclientAvailabilityTemplateEntry';
  data: SchemaSubscriptionclientAvailabilityTemplateEntry;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionclientAvailabilityTemplateEntry;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationsked_BroadcastRecipients = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationsked_BroadcastRecipients';
  data: SchemaSubscriptionsked_BroadcastRecipients;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionsked_BroadcastRecipients;
  timestamp: Scalars['Instant'];
};

export type SchemaSubscriptionNotificationsked_Broadcasts = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationsked_Broadcasts';
  data: SchemaSubscriptionsked_Broadcasts;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionsked_Broadcasts;
  timestamp: Scalars['Instant'];
};

export enum SchemaSubscriptionOp {
  Delete = 'DELETE',
  Insert = 'INSERT',
  Update = 'UPDATE'
}

export type SchemaSubscriptionProducts = {
  __typename?: 'SchemaSubscriptionProducts';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Family?: Maybe<Scalars['String']>;
  IsActive: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  ProductCode?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionRecurringSchedules = {
  __typename?: 'SchemaSubscriptionRecurringSchedules';
  AckAllJobs: Scalars['Boolean'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Pattern?: Maybe<Scalars['String']>;
  Summary?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionRegions = {
  __typename?: 'SchemaSubscriptionRegions';
  CountryCode?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Radius?: Maybe<Scalars['Int']>;
  Timezone: Scalars['String'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionResourceJobOffers = {
  __typename?: 'SchemaSubscriptionResourceJobOffers';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  JobOfferId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  Response?: Maybe<Scalars['String']>;
  Status: Scalars['String'];
  TimeNotified?: Maybe<Scalars['Instant']>;
  TimeResponded?: Maybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionResourceOverrideRegions = {
  __typename?: 'SchemaSubscriptionResourceOverrideRegions';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  RegionId: Scalars['ID'];
  ResourceOverrideId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionResourceOverrides = {
  __typename?: 'SchemaSubscriptionResourceOverrides';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  End: Scalars['Instant'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  HomeAddress?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionResourceRegions = {
  __typename?: 'SchemaSubscriptionResourceRegions';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End?: Maybe<Scalars['Instant']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  RegionId: Scalars['ID'];
  ResourceId: Scalars['ID'];
  Start?: Maybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionResourceRequirementTags = {
  __typename?: 'SchemaSubscriptionResourceRequirementTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  ResourceRequirementId: Scalars['ID'];
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SchemaSubscriptionResourceRequirements = {
  __typename?: 'SchemaSubscriptionResourceRequirements';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Duration?: Maybe<Scalars['Duration']>;
  JobAllocationCount: Scalars['Int'];
  JobAllocationTimeSource: Scalars['Boolean'];
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Quantity: Scalars['Int'];
  RelativeStart?: Maybe<Scalars['Duration']>;
  ScheduledEnd?: Maybe<Scalars['Instant']>;
  ScheduledStart?: Maybe<Scalars['Instant']>;
  Status: Scalars['String'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionResourceShiftBreaks = {
  __typename?: 'SchemaSubscriptionResourceShiftBreaks';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End?: Maybe<Scalars['Instant']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceShiftId: Scalars['ID'];
  Start: Scalars['Instant'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionResourceShiftOffers = {
  __typename?: 'SchemaSubscriptionResourceShiftOffers';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  Response?: Maybe<Scalars['String']>;
  ShiftOfferId: Scalars['ID'];
  Status: Scalars['String'];
  TimeNotified?: Maybe<Scalars['Instant']>;
  TimeResponded?: Maybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionResourceShifts = {
  __typename?: 'SchemaSubscriptionResourceShifts';
  ActualEnd?: Maybe<Scalars['Instant']>;
  ActualStart?: Maybe<Scalars['Instant']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  ShiftId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionResourceTags = {
  __typename?: 'SchemaSubscriptionResourceTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  ExpiryDate?: Maybe<Scalars['Instant']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionResources = {
  __typename?: 'SchemaSubscriptionResources';
  Alias?: Maybe<Scalars['String']>;
  AutoSchedule: Scalars['Boolean'];
  CareConnectUserID?: Maybe<Scalars['BigDecimal']>;
  Category?: Maybe<Scalars['String']>;
  CountryCode?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EffectiveTerminationDate?: Maybe<Scalars['Instant']>;
  Email?: Maybe<Scalars['String']>;
  EmploymentType?: Maybe<Scalars['String']>;
  FSM?: Maybe<Scalars['String']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  HomeAddress?: Maybe<Scalars['String']>;
  IsActive: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  MobilePhone?: Maybe<Scalars['String']>;
  Name: Scalars['String'];
  Notes?: Maybe<Scalars['String']>;
  NotificationType?: Maybe<Scalars['String']>;
  PrimaryPhone?: Maybe<Scalars['String']>;
  PrimaryRegionId: Scalars['ID'];
  Rating?: Maybe<Scalars['Int']>;
  ReportsTo?: Maybe<Scalars['String']>;
  RequestedWorkingHoursPerWeek?: Maybe<Scalars['BigDecimal']>;
  ResourceType?: Maybe<Scalars['String']>;
  TotalUtilizedHours?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
  UserId?: Maybe<Scalars['ID']>;
  WeeklyHours?: Maybe<Scalars['BigDecimal']>;
  WorkingHourType?: Maybe<Scalars['String']>;
  amsuserstatus?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  complianceissue?: Maybe<Scalars['String']>;
  degreetypelab?: Maybe<Scalars['String']>;
  estimatedactivationtimestamp?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  homephone?: Maybe<Scalars['String']>;
  middleInitial?: Maybe<Scalars['String']>;
  npi?: Maybe<Scalars['String']>;
  onboardingstatuslabel?: Maybe<Scalars['String']>;
  personalemail?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  uniqueeid?: Maybe<Scalars['String']>;
  worksfor?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type SchemaSubscriptionScheduleTemplates = {
  __typename?: 'SchemaSubscriptionScheduleTemplates';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DeletedById?: Maybe<Scalars['ID']>;
  DeletedDate?: Maybe<Scalars['Instant']>;
  Description?: Maybe<Scalars['String']>;
  IsDeleted: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  PeriodDays?: Maybe<Scalars['Int']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionShiftOfferShifts = {
  __typename?: 'SchemaSubscriptionShiftOfferShifts';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ShiftId: Scalars['ID'];
  ShiftOfferId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionShiftOffers = {
  __typename?: 'SchemaSubscriptionShiftOffers';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Status: Scalars['String'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionShiftTags = {
  __typename?: 'SchemaSubscriptionShiftTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  ShiftId: Scalars['ID'];
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SchemaSubscriptionShifts = {
  __typename?: 'SchemaSubscriptionShifts';
  CopiedFromId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DisplayName?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  End: Scalars['Instant'];
  IsDraft: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  Name: Scalars['String'];
  RegionId?: Maybe<Scalars['ID']>;
  ScheduleTemplateId?: Maybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  TemplatedShiftId?: Maybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionStarterTest = {
  __typename?: 'SchemaSubscriptionStarterTest';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  StarterTestBooleanField: Scalars['Boolean'];
  StarterTestDecimalField?: Maybe<Scalars['BigDecimal']>;
  StarterTestPicklistField?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionTagManagerSettings = {
  __typename?: 'SchemaSubscriptionTagManagerSettings';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  ExpiredReminder: Scalars['Boolean'];
  ExpiredReminderTemplate?: Maybe<Scalars['String']>;
  ExpiringSoonReminderDays?: Maybe<Scalars['BigDecimal']>;
  ExpiringSoonReminderEnabled: Scalars['Boolean'];
  ExpiringSoonReminderTemplate?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LongLiveToken?: Maybe<Scalars['String']>;
  NotifyExpiringTagOffset1?: Maybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset2?: Maybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset3?: Maybe<Scalars['BigDecimal']>;
  ReminderSendTime?: Maybe<Scalars['BigDecimal']>;
  ReminderTimezone?: Maybe<Scalars['String']>;
  RemindersEnabled: Scalars['Boolean'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionTagRequest = {
  __typename?: 'SchemaSubscriptionTagRequest';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  IsRenewal: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  NewExpiryDate?: Maybe<Scalars['LocalDate']>;
  OldExpiryDate?: Maybe<Scalars['LocalDate']>;
  ResourceId: Scalars['ID'];
  Status?: Maybe<Scalars['String']>;
  TagAssignmentId?: Maybe<Scalars['ID']>;
  TagId?: Maybe<Scalars['ID']>;
  TagName?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionTags = {
  __typename?: 'SchemaSubscriptionTags';
  Classification?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Groups?: Maybe<Array<Scalars['String']>>;
  IsRequestable: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  NotVisibleToResources: Scalars['Boolean'];
  RequestEvidence: Scalars['Boolean'];
  RequiresExpiryDate: Scalars['Boolean'];
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionTemplatedActivities = {
  __typename?: 'SchemaSubscriptionTemplatedActivities';
  Address?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Duration: Scalars['Duration'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  Notes?: Maybe<Scalars['String']>;
  Quantity?: Maybe<Scalars['Int']>;
  ResourceId?: Maybe<Scalars['ID']>;
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  Timezone: Scalars['String'];
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionTemplatedActivityResources = {
  __typename?: 'SchemaSubscriptionTemplatedActivityResources';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  TemplatedActivityId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionTemplatedAttendees = {
  __typename?: 'SchemaSubscriptionTemplatedAttendees';
  ContactId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionTemplatedJobAllocations = {
  __typename?: 'SchemaSubscriptionTemplatedJobAllocations';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Duration?: Maybe<Scalars['Duration']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  NotificationType?: Maybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  StartOffsetDays?: Maybe<Scalars['Int']>;
  StartTimeOfDay?: Maybe<Scalars['LocalTime']>;
  Status: Scalars['String'];
  TeamLeader: Scalars['Boolean'];
  TemplatedJobId: Scalars['ID'];
  TemplatedResourceRequirementId?: Maybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type SchemaSubscriptionTemplatedJobDependencies = {
  __typename?: 'SchemaSubscriptionTemplatedJobDependencies';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  FromAnchor: Scalars['String'];
  FromTemplatedJobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ToAnchor: Scalars['String'];
  ToAnchorMaxOffsetMinutes?: Maybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: Maybe<Scalars['Int']>;
  ToTemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionTemplatedJobProducts = {
  __typename?: 'SchemaSubscriptionTemplatedJobProducts';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ProductId?: Maybe<Scalars['ID']>;
  Qty: Scalars['BigDecimal'];
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionTemplatedJobTags = {
  __typename?: 'SchemaSubscriptionTemplatedJobTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  TagId: Scalars['ID'];
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SchemaSubscriptionTemplatedJobTasks = {
  __typename?: 'SchemaSubscriptionTemplatedJobTasks';
  Completed: Scalars['Boolean'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Seq: Scalars['Int'];
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionTemplatedJobTimeConstraints = {
  __typename?: 'SchemaSubscriptionTemplatedJobTimeConstraints';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndBeforeOffsetDays?: Maybe<Scalars['Int']>;
  EndBeforeTimeOfDay?: Maybe<Scalars['LocalTime']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  StartAfterOffsetDays?: Maybe<Scalars['Int']>;
  StartAfterTimeOfDay?: Maybe<Scalars['LocalTime']>;
  StartBeforeOffsetDays?: Maybe<Scalars['Int']>;
  StartBeforeTimeOfDay?: Maybe<Scalars['LocalTime']>;
  TemplatedJobId: Scalars['ID'];
  Type: Scalars['String'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionTemplatedJobs = {
  __typename?: 'SchemaSubscriptionTemplatedJobs';
  AccountId?: Maybe<Scalars['ID']>;
  Address?: Maybe<Scalars['String']>;
  AutoSchedule: Scalars['Boolean'];
  CanBeDeclined: Scalars['Boolean'];
  ContactId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  CustomerConfirmationStatus?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  IsGroupEvent: Scalars['Boolean'];
  JobAllocationTimeSource: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  Locked: Scalars['Boolean'];
  MaxAttendees?: Maybe<Scalars['Int']>;
  MinAttendees?: Maybe<Scalars['Int']>;
  NotesComments?: Maybe<Scalars['String']>;
  NotifyPeriod?: Maybe<Scalars['Int']>;
  Quantity?: Maybe<Scalars['Int']>;
  RegionId: Scalars['ID'];
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
  Urgency?: Maybe<Scalars['String']>;
  VirtualMeetingId?: Maybe<Scalars['String']>;
  VirtualMeetingInfo?: Maybe<Scalars['String']>;
  VirtualMeetingURL?: Maybe<Scalars['String']>;
};

export type SchemaSubscriptionTemplatedResourceRequirementTags = {
  __typename?: 'SchemaSubscriptionTemplatedResourceRequirementTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  TagId: Scalars['ID'];
  TemplatedResourceRequirementId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SchemaSubscriptionTemplatedResourceRequirements = {
  __typename?: 'SchemaSubscriptionTemplatedResourceRequirements';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  JobAllocationTimeSource: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Quantity: Scalars['Int'];
  RelativeStart?: Maybe<Scalars['Duration']>;
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionTemplatedResourceShifts = {
  __typename?: 'SchemaSubscriptionTemplatedResourceShifts';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  TemplatedShiftId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionTemplatedShiftTags = {
  __typename?: 'SchemaSubscriptionTemplatedShiftTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  TagId: Scalars['ID'];
  TemplatedShiftId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SchemaSubscriptionTemplatedShifts = {
  __typename?: 'SchemaSubscriptionTemplatedShifts';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DisplayName?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  IsDraft: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  RegionId: Scalars['ID'];
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  UID: Scalars['ID'];
};

export type SchemaSubscriptionUserRegions = {
  __typename?: 'SchemaSubscriptionUserRegions';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  RegionId: Scalars['ID'];
  UID: Scalars['ID'];
  UserId: Scalars['ID'];
};

export type SchemaSubscriptionUser_Ext = {
  __typename?: 'SchemaSubscriptionUser_Ext';
  CareConnectUserID?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  UID: Scalars['ID'];
  uniqueeid?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type SchemaSubscriptionUsers = {
  __typename?: 'SchemaSubscriptionUsers';
  City?: Maybe<Scalars['String']>;
  Country?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Email: Scalars['String'];
  FirstName?: Maybe<Scalars['String']>;
  FullPhotoUrl: Scalars['String'];
  IsActive: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LastName: Scalars['String'];
  MobilePhone?: Maybe<Scalars['String']>;
  Name: Scalars['String'];
  PostalCode?: Maybe<Scalars['String']>;
  SmallPhotoUrl: Scalars['String'];
  State?: Maybe<Scalars['String']>;
  Street?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
  UserTypes?: Maybe<Array<Scalars['String']>>;
};

export type SchemaSubscriptionclientAvailabilityTemplateEntry = {
  __typename?: 'SchemaSubscriptionclientAvailabilityTemplateEntry';
  AllDay: Scalars['Boolean'];
  ClientAvailabilityTemplateId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndTime?: Maybe<Scalars['LocalTime']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  Name?: Maybe<Scalars['String']>;
  StartTime?: Maybe<Scalars['LocalTime']>;
  UID: Scalars['ID'];
  Weekday?: Maybe<Scalars['String']>;
};

export type SchemaSubscriptionsked_BroadcastRecipients = {
  __typename?: 'SchemaSubscriptionsked_BroadcastRecipients';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  UID: Scalars['ID'];
  sked_BroadcastId: Scalars['ID'];
  sked_ContactId?: Maybe<Scalars['ID']>;
  sked_Date?: Maybe<Scalars['LocalDate']>;
  sked_ErrorInformation?: Maybe<Scalars['String']>;
  sked_NotificationMethod?: Maybe<Scalars['String']>;
  sked_Phone?: Maybe<Scalars['String']>;
  sked_ResourceId?: Maybe<Scalars['ID']>;
  sked_Status?: Maybe<Scalars['String']>;
  sked_Timestamp?: Maybe<Scalars['String']>;
};

export type SchemaSubscriptionsked_Broadcasts = {
  __typename?: 'SchemaSubscriptionsked_Broadcasts';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  UID: Scalars['ID'];
  sked_Broadcast?: Maybe<Scalars['String']>;
  sked_Date?: Maybe<Scalars['LocalDate']>;
  sked_NotSent?: Maybe<Scalars['BigDecimal']>;
  sked_NotificationMethod?: Maybe<Scalars['String']>;
  sked_RecipientType?: Maybe<Scalars['String']>;
  sked_Sent?: Maybe<Scalars['BigDecimal']>;
  sked_Timestamp?: Maybe<Scalars['String']>;
  sked_TotalRecipients?: Maybe<Scalars['BigDecimal']>;
};

export type ShiftOfferShifts = {
  __typename?: 'ShiftOfferShifts';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Shift: Shifts;
  ShiftId: Scalars['ID'];
  ShiftOffer: ShiftOffers;
  ShiftOfferId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type ShiftOfferShiftsConnection = {
  __typename?: 'ShiftOfferShiftsConnection';
  edges: Array<ShiftOfferShiftsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ShiftOfferShiftsEdge = {
  __typename?: 'ShiftOfferShiftsEdge';
  cursor: Scalars['Base64'];
  node: ShiftOfferShifts;
  offset: Scalars['Int'];
};

export type ShiftOffers = {
  __typename?: 'ShiftOffers';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceShiftOffers: Array<ResourceShiftOffers>;
  Shifts: Array<ShiftOfferShifts>;
  Status: Scalars['OfferStatus'];
  UID: Scalars['ID'];
};


export type ShiftOffersResourceShiftOffersArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShiftOffers']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShiftOffers']>;
};


export type ShiftOffersShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterShiftOfferShifts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShiftOfferShifts']>;
};

export type ShiftOffersConnection = {
  __typename?: 'ShiftOffersConnection';
  edges: Array<ShiftOffersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ShiftOffersEdge = {
  __typename?: 'ShiftOffersEdge';
  cursor: Scalars['Base64'];
  node: ShiftOffers;
  offset: Scalars['Int'];
};

export type ShiftTags = {
  __typename?: 'ShiftTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  Shift: Shifts;
  ShiftId: Scalars['ID'];
  Tag: Tags;
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type ShiftTagsConnection = {
  __typename?: 'ShiftTagsConnection';
  edges: Array<ShiftTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ShiftTagsEdge = {
  __typename?: 'ShiftTagsEdge';
  cursor: Scalars['Base64'];
  node: ShiftTags;
  offset: Scalars['Int'];
};

export type Shifts = {
  __typename?: 'Shifts';
  CopiedFrom?: Maybe<Shifts>;
  CopiedFromId?: Maybe<Scalars['ID']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DisplayName?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  End: Scalars['Instant'];
  IsDraft: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Location?: Maybe<Locations>;
  LocationId?: Maybe<Scalars['ID']>;
  Name: Scalars['String'];
  Region?: Maybe<Regions>;
  RegionId?: Maybe<Scalars['ID']>;
  ResourceShifts: Array<ResourceShifts>;
  ScheduleTemplate?: Maybe<ScheduleTemplates>;
  ScheduleTemplateId?: Maybe<Scalars['ID']>;
  ShiftOffers: Array<ShiftOfferShifts>;
  ShiftTags: Array<ShiftTags>;
  Start: Scalars['Instant'];
  TemplatedShift?: Maybe<TemplatedShifts>;
  TemplatedShiftId?: Maybe<Scalars['ID']>;
  UID: Scalars['ID'];
};


export type ShiftsResourceShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShifts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShifts']>;
};


export type ShiftsShiftOffersArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterShiftOfferShifts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShiftOfferShifts']>;
};


export type ShiftsShiftTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterShiftTags']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShiftTags']>;
};

export type ShiftsConnection = {
  __typename?: 'ShiftsConnection';
  edges: Array<ShiftsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ShiftsEdge = {
  __typename?: 'ShiftsEdge';
  cursor: Scalars['Base64'];
  node: Shifts;
  offset: Scalars['Int'];
};

export type SimpleAccountResourceScores = {
  __typename?: 'SimpleAccountResourceScores';
  AccountId: Scalars['ID'];
  Blacklisted: Scalars['Boolean'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  UID: Scalars['ID'];
  Whitelisted: Scalars['Boolean'];
};

export type SimpleAccountTags = {
  __typename?: 'SimpleAccountTags';
  AccountId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SimpleAccounts = {
  __typename?: 'SimpleAccounts';
  ACId?: Maybe<Scalars['ID']>;
  AVPId?: Maybe<Scalars['ID']>;
  ActiveFromDate?: Maybe<Scalars['LocalDate']>;
  ActiveThruDate?: Maybe<Scalars['LocalDate']>;
  ActualStartOfCareDate?: Maybe<Scalars['LocalDate']>;
  BillingCity?: Maybe<Scalars['String']>;
  BillingPostalCode?: Maybe<Scalars['String']>;
  BillingState?: Maybe<Scalars['String']>;
  BillingStreet?: Maybe<Scalars['String']>;
  CaseID?: Maybe<Scalars['String']>;
  CaseProgressionStatus?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DateOfBirth?: Maybe<Scalars['LocalDate']>;
  DefaultLocationId?: Maybe<Scalars['ID']>;
  DischargeDate?: Maybe<Scalars['Instant']>;
  Division?: Maybe<Scalars['String']>;
  ExternalClientID?: Maybe<Scalars['String']>;
  FSMId?: Maybe<Scalars['ID']>;
  Fax?: Maybe<Scalars['String']>;
  Gender?: Maybe<Scalars['String']>;
  HoldDate?: Maybe<Scalars['LocalDate']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  MRNumber?: Maybe<Scalars['String']>;
  Name: Scalars['String'];
  NeedToRecalculateJobsLocation: Scalars['Boolean'];
  ODId?: Maybe<Scalars['ID']>;
  PayerLabel?: Maybe<Scalars['String']>;
  Phone?: Maybe<Scalars['String']>;
  PlannedStartOfCareDate?: Maybe<Scalars['LocalDate']>;
  PreferredTechnician?: Maybe<Scalars['String']>;
  RCDId?: Maybe<Scalars['ID']>;
  Rank?: Maybe<Scalars['BigDecimal']>;
  RegionId?: Maybe<Scalars['ID']>;
  RequiresWhitelist: Scalars['Boolean'];
  ResumeServiceDate?: Maybe<Scalars['LocalDate']>;
  SCId?: Maybe<Scalars['ID']>;
  ShippingCity?: Maybe<Scalars['String']>;
  ShippingPostalCode?: Maybe<Scalars['String']>;
  ShippingState?: Maybe<Scalars['String']>;
  ShippingStreet?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleActivities = {
  __typename?: 'SimpleActivities';
  Address?: Maybe<Scalars['String']>;
  CopiedFromId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End: Scalars['Instant'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  Name: Scalars['String'];
  Notes?: Maybe<Scalars['String']>;
  Quantity?: Maybe<Scalars['Int']>;
  ResourceId?: Maybe<Scalars['ID']>;
  ScheduleTemplateId?: Maybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  TemplatedActivityId?: Maybe<Scalars['ID']>;
  Timezone?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleActivityResources = {
  __typename?: 'SimpleActivityResources';
  ActivityId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleAdminSetting = {
  __typename?: 'SimpleAdminSetting';
  AllDayEndTime?: Maybe<Scalars['String']>;
  AllDayStartTime?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ReadOnlyAvailabilityForm?: Maybe<Scalars['Boolean']>;
  UID: Scalars['ID'];
};

export type SimpleAttendees = {
  __typename?: 'SimpleAttendees';
  CancelReason?: Maybe<Scalars['String']>;
  ContactId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Status: Scalars['AttendeeStatus'];
  TimeCancelled?: Maybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type SimpleAvailabilities = {
  __typename?: 'SimpleAvailabilities';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Finish: Scalars['Instant'];
  IsAvailable: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Notes?: Maybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  Status?: Maybe<Scalars['AvailabilityStatus']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleAvailabilityPatternResources = {
  __typename?: 'SimpleAvailabilityPatternResources';
  AvailabilityPatternId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End?: Maybe<Scalars['Instant']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  RepeatEvery?: Maybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  Status?: Maybe<Scalars['AvailabilityStatus']>;
  UID: Scalars['ID'];
};

export type SimpleAvailabilityPatterns = {
  __typename?: 'SimpleAvailabilityPatterns';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Hash: Scalars['String'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Pattern: Scalars['String'];
  UID: Scalars['ID'];
};

export type SimpleAvailabilityTemplateEntries = {
  __typename?: 'SimpleAvailabilityTemplateEntries';
  AvailabilityTemplateId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  FinishTime: Scalars['Int'];
  IsAvailable: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  StartTime: Scalars['Int'];
  UID: Scalars['ID'];
  Weekday: Scalars['Weekday'];
};

export type SimpleAvailabilityTemplateResources = {
  __typename?: 'SimpleAvailabilityTemplateResources';
  AvailabilityTemplateId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Migrated: Scalars['Boolean'];
  ResourceId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleAvailabilityTemplates = {
  __typename?: 'SimpleAvailabilityTemplates';
  AvailabilityPatternId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Finish?: Maybe<Scalars['LocalDate']>;
  Global: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  RepeatEvery?: Maybe<Scalars['String']>;
  Start?: Maybe<Scalars['LocalDate']>;
  UID: Scalars['ID'];
};

export type SimpleClientAuthorization = {
  __typename?: 'SimpleClientAuthorization';
  AccountId?: Maybe<Scalars['ID']>;
  AuthorizationEffectiveDate?: Maybe<Scalars['LocalDate']>;
  AuthorizationExpirationDate?: Maybe<Scalars['LocalDate']>;
  AuthorizationNotes?: Maybe<Scalars['String']>;
  AuthorizationStatus?: Maybe<Scalars['String']>;
  CaseProgressionStatus?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DummyTestingField?: Maybe<Scalars['BigDecimal']>;
  ExternalID?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  RegionId?: Maybe<Scalars['ID']>;
  TotalAuthorizedHours?: Maybe<Scalars['BigDecimal']>;
  TotalScheduledAuthorizedHours?: Maybe<Scalars['BigDecimal']>;
  TotalUsedAuthorizedHours?: Maybe<Scalars['BigDecimal']>;
  UID: Scalars['ID'];
};

export type SimpleClientAuthorizationServices = {
  __typename?: 'SimpleClientAuthorizationServices';
  AuthorizedHoursPerWeek?: Maybe<Scalars['BigDecimal']>;
  ClientAuthorizationId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DummyField?: Maybe<Scalars['BigDecimal']>;
  ExternalID?: Maybe<Scalars['String']>;
  FamilyAgreedUpon?: Maybe<Scalars['BigDecimal']>;
  HoursRemainingAfterChargeCreation?: Maybe<Scalars['BigDecimal']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  ServiceType?: Maybe<Scalars['String']>;
  TotalAuthorizedServiceHours?: Maybe<Scalars['BigDecimal']>;
  TotalScheduledServiceHours?: Maybe<Scalars['BigDecimal']>;
  TotalUsedServiceHours?: Maybe<Scalars['BigDecimal']>;
  UID: Scalars['ID'];
};

export type SimpleClientAvailabilities = {
  __typename?: 'SimpleClientAvailabilities';
  AccountId?: Maybe<Scalars['ID']>;
  ContactId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End: Scalars['Instant'];
  IsAvailable: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  PreferredEnd?: Maybe<Scalars['Instant']>;
  PreferredStart?: Maybe<Scalars['Instant']>;
  RecurringScheduleId?: Maybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  UID: Scalars['ID'];
};

export type SimpleClientAvailabilityTemplate = {
  __typename?: 'SimpleClientAvailabilityTemplate';
  AccountId?: Maybe<Scalars['ID']>;
  AdjustmentType?: Maybe<Scalars['String']>;
  AllDay: Scalars['Boolean'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DatesOfMonth?: Maybe<Array<Scalars['String']>>;
  DaysOfMonth?: Maybe<Array<Scalars['String']>>;
  DaysOfWeek?: Maybe<Scalars['String']>;
  DaysOfYear?: Maybe<Scalars['String']>;
  EndDate?: Maybe<Scalars['LocalDate']>;
  EndTime?: Maybe<Scalars['LocalTime']>;
  Label?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  MonthsOfYear?: Maybe<Array<Scalars['String']>>;
  Note?: Maybe<Scalars['String']>;
  Pattern?: Maybe<Scalars['String']>;
  StartDate?: Maybe<Scalars['LocalDate']>;
  StartTime?: Maybe<Scalars['LocalTime']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleContactTags = {
  __typename?: 'SimpleContactTags';
  ContactId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SimpleContacts = {
  __typename?: 'SimpleContacts';
  AccountId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Email?: Maybe<Scalars['String']>;
  FirstName?: Maybe<Scalars['String']>;
  FullName: Scalars['String'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LastName: Scalars['String'];
  MailingCity?: Maybe<Scalars['String']>;
  MailingPostalCode?: Maybe<Scalars['String']>;
  MailingState?: Maybe<Scalars['String']>;
  MailingStreet?: Maybe<Scalars['String']>;
  MobilePhone?: Maybe<Scalars['String']>;
  OtherCity?: Maybe<Scalars['String']>;
  OtherPostalCode?: Maybe<Scalars['String']>;
  OtherState?: Maybe<Scalars['String']>;
  OtherStreet?: Maybe<Scalars['String']>;
  Phone?: Maybe<Scalars['String']>;
  RegionId?: Maybe<Scalars['ID']>;
  Title?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleExceptionRecord = {
  __typename?: 'SimpleExceptionRecord';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  ExceptionId?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  RuleId?: Maybe<Scalars['String']>;
  SourceId?: Maybe<Scalars['String']>;
  SourceType?: Maybe<Scalars['String']>;
  TargetId?: Maybe<Scalars['String']>;
  TargetType?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleExceptionType = {
  __typename?: 'SimpleExceptionType';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  DescriptionTwo?: Maybe<Scalars['String']>;
  ExceptionType: Scalars['String'];
  ExceptionType2: Scalars['String'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleHolidayRegions = {
  __typename?: 'SimpleHolidayRegions';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  HolidayId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  RegionId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleHolidays = {
  __typename?: 'SimpleHolidays';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndDate: Scalars['LocalDate'];
  Global: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  StartDate: Scalars['LocalDate'];
  UID: Scalars['ID'];
};

export type SimpleJobAllocations = {
  __typename?: 'SimpleJobAllocations';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DeclineDescription?: Maybe<Scalars['String']>;
  DeclineReason?: Maybe<Scalars['String']>;
  Duration?: Maybe<Scalars['Duration']>;
  End?: Maybe<Scalars['Instant']>;
  EstimatedTravelDistance?: Maybe<Scalars['BigDecimal']>;
  EstimatedTravelTime?: Maybe<Scalars['Duration']>;
  GeoCheckedInLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoCheckedInLongitude?: Maybe<Scalars['BigDecimal']>;
  GeoCompletedLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoCompletedLongitude?: Maybe<Scalars['BigDecimal']>;
  GeoInProgressLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoInProgressLongitude?: Maybe<Scalars['BigDecimal']>;
  GeoStartTravelLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoStartTravelLongitude?: Maybe<Scalars['BigDecimal']>;
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  NotificationType?: Maybe<Scalars['String']>;
  PhoneResponse?: Maybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  ResourceRequirementId?: Maybe<Scalars['ID']>;
  Start?: Maybe<Scalars['Instant']>;
  Status: Scalars['JobAllocationStatus'];
  TeamLeader: Scalars['Boolean'];
  TimeCheckedIn?: Maybe<Scalars['Instant']>;
  TimeCompleted?: Maybe<Scalars['Instant']>;
  TimeInProgress?: Maybe<Scalars['Instant']>;
  TimePublished?: Maybe<Scalars['Instant']>;
  TimeResponded?: Maybe<Scalars['Instant']>;
  TimeStartTravel?: Maybe<Scalars['Instant']>;
  TravelDistance?: Maybe<Scalars['BigDecimal']>;
  TravelTime?: Maybe<Scalars['Duration']>;
  UID: Scalars['ID'];
};

export type SimpleJobDependencies = {
  __typename?: 'SimpleJobDependencies';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  FromAnchor: Scalars['JobDependencyAnchor'];
  FromJobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ToAnchor: Scalars['JobDependencyAnchor'];
  ToAnchorMaxOffsetMinutes?: Maybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: Maybe<Scalars['Int']>;
  ToJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleJobOffers = {
  __typename?: 'SimpleJobOffers';
  CreatedById: Scalars['ID'];
  CreatedByResource: Scalars['Boolean'];
  CreatedDate: Scalars['Instant'];
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceRequirementId?: Maybe<Scalars['ID']>;
  Status: Scalars['OfferStatus'];
  UID: Scalars['ID'];
};

export type SimpleJobProducts = {
  __typename?: 'SimpleJobProducts';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  ProductId?: Maybe<Scalars['ID']>;
  ProductName?: Maybe<Scalars['String']>;
  Qty: Scalars['BigDecimal'];
  UID: Scalars['ID'];
};

export type SimpleJobTags = {
  __typename?: 'SimpleJobTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SimpleJobTasks = {
  __typename?: 'SimpleJobTasks';
  Completed: Scalars['Boolean'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Seq: Scalars['Int'];
  UID: Scalars['ID'];
};

export type SimpleJobTimeConstraints = {
  __typename?: 'SimpleJobTimeConstraints';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndBefore?: Maybe<Scalars['Instant']>;
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  StartAfter?: Maybe<Scalars['Instant']>;
  StartBefore?: Maybe<Scalars['Instant']>;
  Type: Scalars['JobTimeConstraintType'];
  UID: Scalars['ID'];
};

export type SimpleJobs = {
  __typename?: 'SimpleJobs';
  AbortReason?: Maybe<Scalars['String']>;
  AccountId?: Maybe<Scalars['ID']>;
  ActualEnd?: Maybe<Scalars['Instant']>;
  ActualStart?: Maybe<Scalars['Instant']>;
  Address?: Maybe<Scalars['String']>;
  AuthorizationServiceId?: Maybe<Scalars['ID']>;
  AuthorizedHoursPerWeek?: Maybe<Scalars['BigDecimal']>;
  AutoSchedule: Scalars['Boolean'];
  CanBeDeclined: Scalars['Boolean'];
  ClearOfExceptions: Scalars['Boolean'];
  ClientAuthorizationId?: Maybe<Scalars['ID']>;
  CompletionNotes?: Maybe<Scalars['String']>;
  ContactId?: Maybe<Scalars['ID']>;
  CopiedFromId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  CustomerConfirmationStatus?: Maybe<Scalars['CustomerConfirmationStatus']>;
  Description?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  End?: Maybe<Scalars['Instant']>;
  EstimatedEnd?: Maybe<Scalars['Instant']>;
  EstimatedStart?: Maybe<Scalars['Instant']>;
  FamilyAgreedUpon?: Maybe<Scalars['BigDecimal']>;
  FollowupReason?: Maybe<Scalars['String']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  IsGroupEvent: Scalars['Boolean'];
  JobAllocationCount: Scalars['Int'];
  JobAllocationTimeSource: Scalars['Boolean'];
  JobStatus: Scalars['JobStatus'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  LocationType?: Maybe<Scalars['String']>;
  Locked: Scalars['Boolean'];
  MaxAttendees?: Maybe<Scalars['Int']>;
  MinAttendees?: Maybe<Scalars['Int']>;
  Name: Scalars['String'];
  NotesComments?: Maybe<Scalars['String']>;
  NotifyBy?: Maybe<Scalars['Instant']>;
  NotifyPeriod?: Maybe<Scalars['Int']>;
  ParentId?: Maybe<Scalars['ID']>;
  Quantity?: Maybe<Scalars['Int']>;
  RecurringScheduleId?: Maybe<Scalars['ID']>;
  RegionId: Scalars['ID'];
  ScheduleTemplateId?: Maybe<Scalars['ID']>;
  Start?: Maybe<Scalars['Instant']>;
  TemplatedJobId?: Maybe<Scalars['ID']>;
  Timezone: Scalars['String'];
  TotalAuthorizedServiceHours?: Maybe<Scalars['BigDecimal']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
  Urgency?: Maybe<Scalars['String']>;
  VirtualMeetingId?: Maybe<Scalars['String']>;
  VirtualMeetingInfo?: Maybe<Scalars['String']>;
  VirtualMeetingURL?: Maybe<Scalars['String']>;
};

export type SimpleLocationResourceScores = {
  __typename?: 'SimpleLocationResourceScores';
  Blacklisted: Scalars['Boolean'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId: Scalars['ID'];
  ResourceId: Scalars['ID'];
  UID: Scalars['ID'];
  Whitelisted: Scalars['Boolean'];
};

export type SimpleLocations = {
  __typename?: 'SimpleLocations';
  AccountId?: Maybe<Scalars['ID']>;
  Address?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Default?: Maybe<Scalars['Boolean']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  RegionId?: Maybe<Scalars['ID']>;
  RequiresWhitelist: Scalars['Boolean'];
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleLogger = {
  __typename?: 'SimpleLogger';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Message?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleProducts = {
  __typename?: 'SimpleProducts';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Family?: Maybe<Scalars['String']>;
  IsActive: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  ProductCode?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleRecurringSchedules = {
  __typename?: 'SimpleRecurringSchedules';
  AckAllJobs: Scalars['Boolean'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Pattern?: Maybe<Scalars['String']>;
  Summary?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleRegions = {
  __typename?: 'SimpleRegions';
  CountryCode?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Radius?: Maybe<Scalars['Int']>;
  Timezone: Scalars['String'];
  UID: Scalars['ID'];
};

export type SimpleResourceJobOffers = {
  __typename?: 'SimpleResourceJobOffers';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  JobOfferId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  Response?: Maybe<Scalars['OfferResponse']>;
  Status: Scalars['ResourceOfferStatus'];
  TimeNotified?: Maybe<Scalars['Instant']>;
  TimeResponded?: Maybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type SimpleResourceOverrideRegions = {
  __typename?: 'SimpleResourceOverrideRegions';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  RegionId: Scalars['ID'];
  ResourceOverrideId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleResourceOverrides = {
  __typename?: 'SimpleResourceOverrides';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  End: Scalars['Instant'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  HomeAddress?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  UID: Scalars['ID'];
};

export type SimpleResourceRegions = {
  __typename?: 'SimpleResourceRegions';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End?: Maybe<Scalars['Instant']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  RegionId: Scalars['ID'];
  ResourceId: Scalars['ID'];
  Start?: Maybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type SimpleResourceRequirementTags = {
  __typename?: 'SimpleResourceRequirementTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  ResourceRequirementId: Scalars['ID'];
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SimpleResourceRequirements = {
  __typename?: 'SimpleResourceRequirements';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  Duration?: Maybe<Scalars['Duration']>;
  JobAllocationCount: Scalars['Int'];
  JobAllocationTimeSource: Scalars['Boolean'];
  JobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Quantity: Scalars['Int'];
  RelativeStart?: Maybe<Scalars['Duration']>;
  ScheduledEnd?: Maybe<Scalars['Instant']>;
  ScheduledStart?: Maybe<Scalars['Instant']>;
  Status: Scalars['JobStatus'];
  UID: Scalars['ID'];
};

export type SimpleResourceShiftBreaks = {
  __typename?: 'SimpleResourceShiftBreaks';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  End?: Maybe<Scalars['Instant']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceShiftId: Scalars['ID'];
  Start: Scalars['Instant'];
  UID: Scalars['ID'];
};

export type SimpleResourceShiftOffers = {
  __typename?: 'SimpleResourceShiftOffers';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  Response?: Maybe<Scalars['OfferResponse']>;
  ShiftOfferId: Scalars['ID'];
  Status: Scalars['ResourceOfferStatus'];
  TimeNotified?: Maybe<Scalars['Instant']>;
  TimeResponded?: Maybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type SimpleResourceShifts = {
  __typename?: 'SimpleResourceShifts';
  ActualEnd?: Maybe<Scalars['Instant']>;
  ActualStart?: Maybe<Scalars['Instant']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  ShiftId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleResourceTags = {
  __typename?: 'SimpleResourceTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  ExpiryDate?: Maybe<Scalars['Instant']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleResources = {
  __typename?: 'SimpleResources';
  Alias?: Maybe<Scalars['String']>;
  AutoSchedule: Scalars['Boolean'];
  CareConnectUserID?: Maybe<Scalars['BigDecimal']>;
  Category?: Maybe<Scalars['String']>;
  CountryCode?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EffectiveTerminationDate?: Maybe<Scalars['Instant']>;
  Email?: Maybe<Scalars['String']>;
  EmploymentType?: Maybe<Scalars['String']>;
  FSM?: Maybe<Scalars['String']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  HomeAddress?: Maybe<Scalars['String']>;
  IsActive: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  MobilePhone?: Maybe<Scalars['String']>;
  Name: Scalars['String'];
  Notes?: Maybe<Scalars['String']>;
  NotificationType?: Maybe<Scalars['String']>;
  PrimaryPhone?: Maybe<Scalars['String']>;
  PrimaryRegionId: Scalars['ID'];
  Rating?: Maybe<Scalars['Int']>;
  ReportsTo?: Maybe<Scalars['String']>;
  RequestedWorkingHoursPerWeek?: Maybe<Scalars['BigDecimal']>;
  ResourceType?: Maybe<Scalars['String']>;
  TotalUtilizedHours?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
  UserId?: Maybe<Scalars['ID']>;
  WeeklyHours?: Maybe<Scalars['BigDecimal']>;
  WorkingHourType?: Maybe<Scalars['WorkingHourType']>;
  amsuserstatus?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  complianceissue?: Maybe<Scalars['String']>;
  degreetypelab?: Maybe<Scalars['String']>;
  estimatedactivationtimestamp?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  homephone?: Maybe<Scalars['String']>;
  middleInitial?: Maybe<Scalars['String']>;
  npi?: Maybe<Scalars['String']>;
  onboardingstatuslabel?: Maybe<Scalars['String']>;
  personalemail?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  uniqueeid?: Maybe<Scalars['String']>;
  worksfor?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type SimpleScheduleTemplates = {
  __typename?: 'SimpleScheduleTemplates';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DeletedById?: Maybe<Scalars['ID']>;
  DeletedDate?: Maybe<Scalars['Instant']>;
  Description?: Maybe<Scalars['String']>;
  IsDeleted: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  PeriodDays?: Maybe<Scalars['Int']>;
  UID: Scalars['ID'];
};

export type SimpleShiftOfferShifts = {
  __typename?: 'SimpleShiftOfferShifts';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ShiftId: Scalars['ID'];
  ShiftOfferId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleShiftOffers = {
  __typename?: 'SimpleShiftOffers';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Status: Scalars['OfferStatus'];
  UID: Scalars['ID'];
};

export type SimpleShiftTags = {
  __typename?: 'SimpleShiftTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  ShiftId: Scalars['ID'];
  TagId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SimpleShifts = {
  __typename?: 'SimpleShifts';
  CopiedFromId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DisplayName?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  End: Scalars['Instant'];
  IsDraft: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  Name: Scalars['String'];
  RegionId?: Maybe<Scalars['ID']>;
  ScheduleTemplateId?: Maybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  TemplatedShiftId?: Maybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type SimpleStarterTest = {
  __typename?: 'SimpleStarterTest';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  StarterTestBooleanField: Scalars['Boolean'];
  StarterTestDecimalField?: Maybe<Scalars['BigDecimal']>;
  StarterTestPicklistField?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleTagManagerSettings = {
  __typename?: 'SimpleTagManagerSettings';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  ExpiredReminder: Scalars['Boolean'];
  ExpiredReminderTemplate?: Maybe<Scalars['String']>;
  ExpiringSoonReminderDays?: Maybe<Scalars['BigDecimal']>;
  ExpiringSoonReminderEnabled: Scalars['Boolean'];
  ExpiringSoonReminderTemplate?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LongLiveToken?: Maybe<Scalars['String']>;
  NotifyExpiringTagOffset1?: Maybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset2?: Maybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset3?: Maybe<Scalars['BigDecimal']>;
  ReminderSendTime?: Maybe<Scalars['BigDecimal']>;
  ReminderTimezone?: Maybe<Scalars['String']>;
  RemindersEnabled: Scalars['Boolean'];
  UID: Scalars['ID'];
};

export type SimpleTagRequest = {
  __typename?: 'SimpleTagRequest';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  IsRenewal: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  NewExpiryDate?: Maybe<Scalars['LocalDate']>;
  OldExpiryDate?: Maybe<Scalars['LocalDate']>;
  ResourceId: Scalars['ID'];
  Status?: Maybe<Scalars['String']>;
  TagAssignmentId?: Maybe<Scalars['ID']>;
  TagId?: Maybe<Scalars['ID']>;
  TagName?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleTags = {
  __typename?: 'SimpleTags';
  Classification?: Maybe<Scalars['TagClassification']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Groups?: Maybe<Array<Scalars['String']>>;
  IsRequestable: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  NotVisibleToResources: Scalars['Boolean'];
  RequestEvidence: Scalars['Boolean'];
  RequiresExpiryDate: Scalars['Boolean'];
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleTemplatedActivities = {
  __typename?: 'SimpleTemplatedActivities';
  Address?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Duration: Scalars['Duration'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  Notes?: Maybe<Scalars['String']>;
  Quantity?: Maybe<Scalars['Int']>;
  ResourceId?: Maybe<Scalars['ID']>;
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  Timezone: Scalars['String'];
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type SimpleTemplatedActivityResources = {
  __typename?: 'SimpleTemplatedActivityResources';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  TemplatedActivityId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleTemplatedAttendees = {
  __typename?: 'SimpleTemplatedAttendees';
  ContactId: Scalars['ID'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleTemplatedJobAllocations = {
  __typename?: 'SimpleTemplatedJobAllocations';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Duration?: Maybe<Scalars['Duration']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  NotificationType?: Maybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  StartOffsetDays?: Maybe<Scalars['Int']>;
  StartTimeOfDay?: Maybe<Scalars['LocalTime']>;
  Status: Scalars['JobAllocationStatus'];
  TeamLeader: Scalars['Boolean'];
  TemplatedJobId: Scalars['ID'];
  TemplatedResourceRequirementId?: Maybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type SimpleTemplatedJobDependencies = {
  __typename?: 'SimpleTemplatedJobDependencies';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  FromAnchor: Scalars['JobDependencyAnchor'];
  FromTemplatedJobId: Scalars['ID'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ToAnchor: Scalars['JobDependencyAnchor'];
  ToAnchorMaxOffsetMinutes?: Maybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: Maybe<Scalars['Int']>;
  ToTemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleTemplatedJobProducts = {
  __typename?: 'SimpleTemplatedJobProducts';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ProductId?: Maybe<Scalars['ID']>;
  Qty: Scalars['BigDecimal'];
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleTemplatedJobTags = {
  __typename?: 'SimpleTemplatedJobTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  TagId: Scalars['ID'];
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SimpleTemplatedJobTasks = {
  __typename?: 'SimpleTemplatedJobTasks';
  Completed: Scalars['Boolean'];
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Seq: Scalars['Int'];
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleTemplatedJobTimeConstraints = {
  __typename?: 'SimpleTemplatedJobTimeConstraints';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndBeforeOffsetDays?: Maybe<Scalars['Int']>;
  EndBeforeTimeOfDay?: Maybe<Scalars['LocalTime']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  StartAfterOffsetDays?: Maybe<Scalars['Int']>;
  StartAfterTimeOfDay?: Maybe<Scalars['LocalTime']>;
  StartBeforeOffsetDays?: Maybe<Scalars['Int']>;
  StartBeforeTimeOfDay?: Maybe<Scalars['LocalTime']>;
  TemplatedJobId: Scalars['ID'];
  Type: Scalars['JobTimeConstraintType'];
  UID: Scalars['ID'];
};

export type SimpleTemplatedJobs = {
  __typename?: 'SimpleTemplatedJobs';
  AccountId?: Maybe<Scalars['ID']>;
  Address?: Maybe<Scalars['String']>;
  AutoSchedule: Scalars['Boolean'];
  CanBeDeclined: Scalars['Boolean'];
  ContactId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  CustomerConfirmationStatus?: Maybe<Scalars['CustomerConfirmationStatus']>;
  Description?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  IsGroupEvent: Scalars['Boolean'];
  JobAllocationTimeSource: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  Locked: Scalars['Boolean'];
  MaxAttendees?: Maybe<Scalars['Int']>;
  MinAttendees?: Maybe<Scalars['Int']>;
  NotesComments?: Maybe<Scalars['String']>;
  NotifyPeriod?: Maybe<Scalars['Int']>;
  Quantity?: Maybe<Scalars['Int']>;
  RegionId: Scalars['ID'];
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
  Urgency?: Maybe<Scalars['String']>;
  VirtualMeetingId?: Maybe<Scalars['String']>;
  VirtualMeetingInfo?: Maybe<Scalars['String']>;
  VirtualMeetingURL?: Maybe<Scalars['String']>;
};

export type SimpleTemplatedResourceRequirementTags = {
  __typename?: 'SimpleTemplatedResourceRequirementTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  TagId: Scalars['ID'];
  TemplatedResourceRequirementId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SimpleTemplatedResourceRequirements = {
  __typename?: 'SimpleTemplatedResourceRequirements';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  JobAllocationTimeSource: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Quantity: Scalars['Int'];
  RelativeStart?: Maybe<Scalars['Duration']>;
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleTemplatedResourceShifts = {
  __typename?: 'SimpleTemplatedResourceShifts';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ResourceId: Scalars['ID'];
  TemplatedShiftId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type SimpleTemplatedShiftTags = {
  __typename?: 'SimpleTemplatedShiftTags';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  TagId: Scalars['ID'];
  TemplatedShiftId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type SimpleTemplatedShifts = {
  __typename?: 'SimpleTemplatedShifts';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DisplayName?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  IsDraft: Scalars['Boolean'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  RegionId: Scalars['ID'];
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  UID: Scalars['ID'];
};

export type SimpleUserRegions = {
  __typename?: 'SimpleUserRegions';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  RegionId: Scalars['ID'];
  UID: Scalars['ID'];
  UserId: Scalars['ID'];
};

export type SimpleUser_Ext = {
  __typename?: 'SimpleUser_Ext';
  CareConnectUserID?: Maybe<Scalars['String']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  UID: Scalars['ID'];
  uniqueeid?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type SimpleclientAvailabilityTemplateEntry = {
  __typename?: 'SimpleclientAvailabilityTemplateEntry';
  AllDay: Scalars['Boolean'];
  ClientAvailabilityTemplateId?: Maybe<Scalars['ID']>;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndTime?: Maybe<Scalars['LocalTime']>;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LocationId?: Maybe<Scalars['ID']>;
  Name?: Maybe<Scalars['String']>;
  StartTime?: Maybe<Scalars['LocalTime']>;
  UID: Scalars['ID'];
  Weekday?: Maybe<Scalars['String']>;
};

export type Simplesked_BroadcastRecipients = {
  __typename?: 'Simplesked_BroadcastRecipients';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  UID: Scalars['ID'];
  sked_BroadcastId: Scalars['ID'];
  sked_ContactId?: Maybe<Scalars['ID']>;
  sked_Date?: Maybe<Scalars['LocalDate']>;
  sked_ErrorInformation?: Maybe<Scalars['String']>;
  sked_NotificationMethod?: Maybe<Scalars['String']>;
  sked_Phone?: Maybe<Scalars['String']>;
  sked_ResourceId?: Maybe<Scalars['ID']>;
  sked_Status?: Maybe<Scalars['String']>;
  sked_Timestamp?: Maybe<Scalars['String']>;
};

export type Simplesked_Broadcasts = {
  __typename?: 'Simplesked_Broadcasts';
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  UID: Scalars['ID'];
  sked_Broadcast?: Maybe<Scalars['String']>;
  sked_Date?: Maybe<Scalars['LocalDate']>;
  sked_NotSent?: Maybe<Scalars['BigDecimal']>;
  sked_NotificationMethod?: Maybe<Scalars['String']>;
  sked_RecipientType?: Maybe<Scalars['String']>;
  sked_Sent?: Maybe<Scalars['BigDecimal']>;
  sked_Timestamp?: Maybe<Scalars['String']>;
  sked_TotalRecipients?: Maybe<Scalars['BigDecimal']>;
};

export type StarterTest = {
  __typename?: 'StarterTest';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  StarterTestBooleanField: Scalars['Boolean'];
  StarterTestDecimalField?: Maybe<Scalars['BigDecimal']>;
  StarterTestPicklistField?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type StarterTestConnection = {
  __typename?: 'StarterTestConnection';
  edges: Array<StarterTestEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type StarterTestEdge = {
  __typename?: 'StarterTestEdge';
  cursor: Scalars['Base64'];
  node: StarterTest;
  offset: Scalars['Int'];
};

export type Subscription = {
  __typename?: 'Subscription';
  schemaAccountResourceScores: SchemaSubscriptionNotificationAccountResourceScores;
  schemaAccountTags: SchemaSubscriptionNotificationAccountTags;
  schemaAccounts: SchemaSubscriptionNotificationAccounts;
  schemaActivities: SchemaSubscriptionNotificationActivities;
  schemaActivityResources: SchemaSubscriptionNotificationActivityResources;
  schemaAdminSetting: SchemaSubscriptionNotificationAdminSetting;
  schemaAttendees: SchemaSubscriptionNotificationAttendees;
  schemaAvailabilities: SchemaSubscriptionNotificationAvailabilities;
  schemaAvailabilityPatternResources: SchemaSubscriptionNotificationAvailabilityPatternResources;
  schemaAvailabilityPatterns: SchemaSubscriptionNotificationAvailabilityPatterns;
  schemaAvailabilityTemplateEntries: SchemaSubscriptionNotificationAvailabilityTemplateEntries;
  schemaAvailabilityTemplateResources: SchemaSubscriptionNotificationAvailabilityTemplateResources;
  schemaAvailabilityTemplates: SchemaSubscriptionNotificationAvailabilityTemplates;
  schemaClientAuthorization: SchemaSubscriptionNotificationClientAuthorization;
  schemaClientAuthorizationServices: SchemaSubscriptionNotificationClientAuthorizationServices;
  schemaClientAvailabilities: SchemaSubscriptionNotificationClientAvailabilities;
  schemaClientAvailabilityTemplate: SchemaSubscriptionNotificationClientAvailabilityTemplate;
  schemaContactTags: SchemaSubscriptionNotificationContactTags;
  schemaContacts: SchemaSubscriptionNotificationContacts;
  schemaExceptionRecord: SchemaSubscriptionNotificationExceptionRecord;
  schemaExceptionType: SchemaSubscriptionNotificationExceptionType;
  schemaHolidayRegions: SchemaSubscriptionNotificationHolidayRegions;
  schemaHolidays: SchemaSubscriptionNotificationHolidays;
  schemaJobAllocations: SchemaSubscriptionNotificationJobAllocations;
  schemaJobDependencies: SchemaSubscriptionNotificationJobDependencies;
  schemaJobOffers: SchemaSubscriptionNotificationJobOffers;
  schemaJobProducts: SchemaSubscriptionNotificationJobProducts;
  schemaJobTags: SchemaSubscriptionNotificationJobTags;
  schemaJobTasks: SchemaSubscriptionNotificationJobTasks;
  schemaJobTimeConstraints: SchemaSubscriptionNotificationJobTimeConstraints;
  schemaJobs: SchemaSubscriptionNotificationJobs;
  schemaLocationResourceScores: SchemaSubscriptionNotificationLocationResourceScores;
  schemaLocations: SchemaSubscriptionNotificationLocations;
  schemaLogger: SchemaSubscriptionNotificationLogger;
  schemaProducts: SchemaSubscriptionNotificationProducts;
  schemaRecurringSchedules: SchemaSubscriptionNotificationRecurringSchedules;
  schemaRegions: SchemaSubscriptionNotificationRegions;
  schemaResourceJobOffers: SchemaSubscriptionNotificationResourceJobOffers;
  schemaResourceOverrideRegions: SchemaSubscriptionNotificationResourceOverrideRegions;
  schemaResourceOverrides: SchemaSubscriptionNotificationResourceOverrides;
  schemaResourceRegions: SchemaSubscriptionNotificationResourceRegions;
  schemaResourceRequirementTags: SchemaSubscriptionNotificationResourceRequirementTags;
  schemaResourceRequirements: SchemaSubscriptionNotificationResourceRequirements;
  schemaResourceShiftBreaks: SchemaSubscriptionNotificationResourceShiftBreaks;
  schemaResourceShiftOffers: SchemaSubscriptionNotificationResourceShiftOffers;
  schemaResourceShifts: SchemaSubscriptionNotificationResourceShifts;
  schemaResourceTags: SchemaSubscriptionNotificationResourceTags;
  schemaResources: SchemaSubscriptionNotificationResources;
  schemaScheduleTemplates: SchemaSubscriptionNotificationScheduleTemplates;
  schemaShiftOfferShifts: SchemaSubscriptionNotificationShiftOfferShifts;
  schemaShiftOffers: SchemaSubscriptionNotificationShiftOffers;
  schemaShiftTags: SchemaSubscriptionNotificationShiftTags;
  schemaShifts: SchemaSubscriptionNotificationShifts;
  schemaStarterTest: SchemaSubscriptionNotificationStarterTest;
  schemaTagManagerSettings: SchemaSubscriptionNotificationTagManagerSettings;
  schemaTagRequest: SchemaSubscriptionNotificationTagRequest;
  schemaTags: SchemaSubscriptionNotificationTags;
  schemaTemplatedActivities: SchemaSubscriptionNotificationTemplatedActivities;
  schemaTemplatedActivityResources: SchemaSubscriptionNotificationTemplatedActivityResources;
  schemaTemplatedAttendees: SchemaSubscriptionNotificationTemplatedAttendees;
  schemaTemplatedJobAllocations: SchemaSubscriptionNotificationTemplatedJobAllocations;
  schemaTemplatedJobDependencies: SchemaSubscriptionNotificationTemplatedJobDependencies;
  schemaTemplatedJobProducts: SchemaSubscriptionNotificationTemplatedJobProducts;
  schemaTemplatedJobTags: SchemaSubscriptionNotificationTemplatedJobTags;
  schemaTemplatedJobTasks: SchemaSubscriptionNotificationTemplatedJobTasks;
  schemaTemplatedJobTimeConstraints: SchemaSubscriptionNotificationTemplatedJobTimeConstraints;
  schemaTemplatedJobs: SchemaSubscriptionNotificationTemplatedJobs;
  schemaTemplatedResourceRequirementTags: SchemaSubscriptionNotificationTemplatedResourceRequirementTags;
  schemaTemplatedResourceRequirements: SchemaSubscriptionNotificationTemplatedResourceRequirements;
  schemaTemplatedResourceShifts: SchemaSubscriptionNotificationTemplatedResourceShifts;
  schemaTemplatedShiftTags: SchemaSubscriptionNotificationTemplatedShiftTags;
  schemaTemplatedShifts: SchemaSubscriptionNotificationTemplatedShifts;
  schemaUserRegions: SchemaSubscriptionNotificationUserRegions;
  schemaUser_Ext: SchemaSubscriptionNotificationUser_Ext;
  schemaUsers: SchemaSubscriptionNotificationUsers;
  schemaclientAvailabilityTemplateEntry: SchemaSubscriptionNotificationclientAvailabilityTemplateEntry;
  schemasked_BroadcastRecipients: SchemaSubscriptionNotificationsked_BroadcastRecipients;
  schemasked_Broadcasts: SchemaSubscriptionNotificationsked_Broadcasts;
};


export type SubscriptionSchemaAccountResourceScoresArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterAccountResourceScores']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterAccountResourceScores']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaAccountTagsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterAccountTags']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterAccountTags']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaAccountsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterAccounts']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterAccounts']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaActivitiesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterActivities']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterActivities']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaActivityResourcesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterActivityResources']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterActivityResources']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaAdminSettingArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterAdminSetting']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterAdminSetting']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaAttendeesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterAttendees']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterAttendees']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaAvailabilitiesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterAvailabilities']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterAvailabilities']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaAvailabilityPatternResourcesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterAvailabilityPatternResources']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterAvailabilityPatternResources']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaAvailabilityPatternsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterAvailabilityPatterns']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterAvailabilityPatterns']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaAvailabilityTemplateEntriesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterAvailabilityTemplateEntries']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterAvailabilityTemplateEntries']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaAvailabilityTemplateResourcesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterAvailabilityTemplateResources']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterAvailabilityTemplateResources']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaAvailabilityTemplatesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterAvailabilityTemplates']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterAvailabilityTemplates']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaClientAuthorizationArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterClientAuthorization']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterClientAuthorization']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaClientAuthorizationServicesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterClientAuthorizationServices']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterClientAuthorizationServices']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaClientAvailabilitiesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterClientAvailabilities']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterClientAvailabilities']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaClientAvailabilityTemplateArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterClientAvailabilityTemplate']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterClientAvailabilityTemplate']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaContactTagsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterContactTags']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterContactTags']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaContactsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterContacts']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterContacts']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaExceptionRecordArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterExceptionRecord']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterExceptionRecord']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaExceptionTypeArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterExceptionType']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterExceptionType']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaHolidayRegionsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterHolidayRegions']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterHolidayRegions']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaHolidaysArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterHolidays']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterHolidays']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaJobAllocationsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterJobAllocations']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterJobAllocations']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaJobDependenciesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterJobDependencies']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterJobDependencies']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaJobOffersArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterJobOffers']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterJobOffers']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaJobProductsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterJobProducts']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterJobProducts']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaJobTagsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterJobTags']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterJobTags']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaJobTasksArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterJobTasks']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterJobTasks']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaJobTimeConstraintsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterJobTimeConstraints']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterJobTimeConstraints']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaJobsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterJobs']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterJobs']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaLocationResourceScoresArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterLocationResourceScores']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterLocationResourceScores']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaLocationsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterLocations']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterLocations']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaLoggerArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterLogger']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterLogger']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaProductsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterProducts']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterProducts']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaRecurringSchedulesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterRecurringSchedules']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterRecurringSchedules']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaRegionsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterRegions']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterRegions']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaResourceJobOffersArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterResourceJobOffers']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterResourceJobOffers']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaResourceOverrideRegionsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterResourceOverrideRegions']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterResourceOverrideRegions']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaResourceOverridesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterResourceOverrides']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterResourceOverrides']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaResourceRegionsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterResourceRegions']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterResourceRegions']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaResourceRequirementTagsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterResourceRequirementTags']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterResourceRequirementTags']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaResourceRequirementsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterResourceRequirements']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterResourceRequirements']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaResourceShiftBreaksArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterResourceShiftBreaks']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterResourceShiftBreaks']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaResourceShiftOffersArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterResourceShiftOffers']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterResourceShiftOffers']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaResourceShiftsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterResourceShifts']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterResourceShifts']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaResourceTagsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterResourceTags']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterResourceTags']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaResourcesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterResources']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterResources']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaScheduleTemplatesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterScheduleTemplates']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterScheduleTemplates']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaShiftOfferShiftsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterShiftOfferShifts']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterShiftOfferShifts']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaShiftOffersArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterShiftOffers']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterShiftOffers']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaShiftTagsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterShiftTags']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterShiftTags']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaShiftsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterShifts']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterShifts']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaStarterTestArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterStarterTest']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterStarterTest']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTagManagerSettingsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTagManagerSettings']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTagManagerSettings']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTagRequestArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTagRequest']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTagRequest']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTagsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTags']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTags']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTemplatedActivitiesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTemplatedActivities']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTemplatedActivities']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTemplatedActivityResourcesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTemplatedActivityResources']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTemplatedActivityResources']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTemplatedAttendeesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTemplatedAttendees']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTemplatedAttendees']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTemplatedJobAllocationsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTemplatedJobAllocations']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTemplatedJobAllocations']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTemplatedJobDependenciesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTemplatedJobDependencies']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTemplatedJobDependencies']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTemplatedJobProductsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTemplatedJobProducts']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTemplatedJobProducts']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTemplatedJobTagsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTemplatedJobTags']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTemplatedJobTags']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTemplatedJobTasksArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTemplatedJobTasks']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTemplatedJobTasks']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTemplatedJobTimeConstraintsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTemplatedJobTimeConstraints']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTemplatedJobTimeConstraints']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTemplatedJobsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTemplatedJobs']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTemplatedJobs']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTemplatedResourceRequirementTagsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTemplatedResourceRequirementTags']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTemplatedResourceRequirementTags']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTemplatedResourceRequirementsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTemplatedResourceRequirements']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTemplatedResourceRequirements']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTemplatedResourceShiftsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTemplatedResourceShifts']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTemplatedResourceShifts']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTemplatedShiftTagsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTemplatedShiftTags']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTemplatedShiftTags']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaTemplatedShiftsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterTemplatedShifts']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterTemplatedShifts']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaUserRegionsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterUserRegions']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterUserRegions']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaUser_ExtArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterUser_Ext']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterUser_Ext']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaUsersArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterUsers']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterUsers']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaclientAvailabilityTemplateEntryArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterclientAvailabilityTemplateEntry']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterclientAvailabilityTemplateEntry']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemasked_BroadcastRecipientsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFiltersked_BroadcastRecipients']>;
  filter?: InputMaybe<Scalars['EQLRecordFiltersked_BroadcastRecipients']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemasked_BroadcastsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFiltersked_Broadcasts']>;
  filter?: InputMaybe<Scalars['EQLRecordFiltersked_Broadcasts']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};

export type TagManagerSettings = {
  __typename?: 'TagManagerSettings';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  ExpiredReminder: Scalars['Boolean'];
  ExpiredReminderTemplate?: Maybe<Scalars['String']>;
  ExpiringSoonReminderDays?: Maybe<Scalars['BigDecimal']>;
  ExpiringSoonReminderEnabled: Scalars['Boolean'];
  ExpiringSoonReminderTemplate?: Maybe<Scalars['String']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LongLiveToken?: Maybe<Scalars['String']>;
  NotifyExpiringTagOffset1?: Maybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset2?: Maybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset3?: Maybe<Scalars['BigDecimal']>;
  ReminderSendTime?: Maybe<Scalars['BigDecimal']>;
  ReminderTimezone?: Maybe<Scalars['String']>;
  RemindersEnabled: Scalars['Boolean'];
  UID: Scalars['ID'];
};

export type TagManagerSettingsConnection = {
  __typename?: 'TagManagerSettingsConnection';
  edges: Array<TagManagerSettingsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TagManagerSettingsEdge = {
  __typename?: 'TagManagerSettingsEdge';
  cursor: Scalars['Base64'];
  node: TagManagerSettings;
  offset: Scalars['Int'];
};

export type TagRequest = {
  __typename?: 'TagRequest';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  IsRenewal: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  NewExpiryDate?: Maybe<Scalars['LocalDate']>;
  OldExpiryDate?: Maybe<Scalars['LocalDate']>;
  Resource: Resources;
  ResourceId: Scalars['ID'];
  Status?: Maybe<Scalars['String']>;
  Tag?: Maybe<Tags>;
  TagAssignment?: Maybe<ResourceTags>;
  TagAssignmentId?: Maybe<Scalars['ID']>;
  TagId?: Maybe<Scalars['ID']>;
  TagName?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type TagRequestConnection = {
  __typename?: 'TagRequestConnection';
  edges: Array<TagRequestEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TagRequestEdge = {
  __typename?: 'TagRequestEdge';
  cursor: Scalars['Base64'];
  node: TagRequest;
  offset: Scalars['Int'];
};

export type Tags = {
  __typename?: 'Tags';
  Classification?: Maybe<Scalars['TagClassification']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Groups?: Maybe<Array<Scalars['String']>>;
  IsRequestable: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  NotVisibleToResources: Scalars['Boolean'];
  RequestEvidence: Scalars['Boolean'];
  RequiresExpiryDate: Scalars['Boolean'];
  ResourceTags: Array<ResourceTags>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};


export type TagsResourceTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceTags']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceTags']>;
};

export type TagsConnection = {
  __typename?: 'TagsConnection';
  edges: Array<TagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TagsEdge = {
  __typename?: 'TagsEdge';
  cursor: Scalars['Base64'];
  node: Tags;
  offset: Scalars['Int'];
};

export type TemplatedActivities = {
  __typename?: 'TemplatedActivities';
  Activities: Array<Activities>;
  Address?: Maybe<Scalars['String']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Duration: Scalars['Duration'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Location?: Maybe<Locations>;
  LocationId?: Maybe<Scalars['ID']>;
  Notes?: Maybe<Scalars['String']>;
  Quantity?: Maybe<Scalars['Int']>;
  Resource?: Maybe<Resources>;
  ResourceId?: Maybe<Scalars['ID']>;
  ScheduleTemplate: ScheduleTemplates;
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  TemplatedActivityResources: Array<TemplatedActivityResources>;
  Timezone: Scalars['String'];
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
};


export type TemplatedActivitiesActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterActivities']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivities']>;
};


export type TemplatedActivitiesTemplatedActivityResourcesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedActivityResources']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedActivityResources']>;
};

export type TemplatedActivitiesConnection = {
  __typename?: 'TemplatedActivitiesConnection';
  edges: Array<TemplatedActivitiesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedActivitiesEdge = {
  __typename?: 'TemplatedActivitiesEdge';
  cursor: Scalars['Base64'];
  node: TemplatedActivities;
  offset: Scalars['Int'];
};

export type TemplatedActivityResources = {
  __typename?: 'TemplatedActivityResources';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  TemplatedActivity: TemplatedActivities;
  TemplatedActivityId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type TemplatedActivityResourcesConnection = {
  __typename?: 'TemplatedActivityResourcesConnection';
  edges: Array<TemplatedActivityResourcesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedActivityResourcesEdge = {
  __typename?: 'TemplatedActivityResourcesEdge';
  cursor: Scalars['Base64'];
  node: TemplatedActivityResources;
  offset: Scalars['Int'];
};

export type TemplatedAttendees = {
  __typename?: 'TemplatedAttendees';
  Contact: Contacts;
  ContactId: Scalars['ID'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  TemplatedJob: TemplatedJobs;
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type TemplatedAttendeesConnection = {
  __typename?: 'TemplatedAttendeesConnection';
  edges: Array<TemplatedAttendeesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedAttendeesEdge = {
  __typename?: 'TemplatedAttendeesEdge';
  cursor: Scalars['Base64'];
  node: TemplatedAttendees;
  offset: Scalars['Int'];
};

export type TemplatedJobAllocations = {
  __typename?: 'TemplatedJobAllocations';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Duration?: Maybe<Scalars['Duration']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  NotificationType?: Maybe<Scalars['String']>;
  Resource: Resources;
  ResourceId: Scalars['ID'];
  StartOffsetDays?: Maybe<Scalars['Int']>;
  StartTimeOfDay?: Maybe<Scalars['LocalTime']>;
  Status: Scalars['JobAllocationStatus'];
  TeamLeader: Scalars['Boolean'];
  TemplatedJob: TemplatedJobs;
  TemplatedJobId: Scalars['ID'];
  TemplatedResourceRequirement?: Maybe<TemplatedResourceRequirements>;
  TemplatedResourceRequirementId?: Maybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type TemplatedJobAllocationsConnection = {
  __typename?: 'TemplatedJobAllocationsConnection';
  edges: Array<TemplatedJobAllocationsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedJobAllocationsEdge = {
  __typename?: 'TemplatedJobAllocationsEdge';
  cursor: Scalars['Base64'];
  node: TemplatedJobAllocations;
  offset: Scalars['Int'];
};

export type TemplatedJobDependencies = {
  __typename?: 'TemplatedJobDependencies';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  FromAnchor: Scalars['JobDependencyAnchor'];
  FromTemplatedJob: TemplatedJobs;
  FromTemplatedJobId: Scalars['ID'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  ToAnchor: Scalars['JobDependencyAnchor'];
  ToAnchorMaxOffsetMinutes?: Maybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: Maybe<Scalars['Int']>;
  ToTemplatedJob: TemplatedJobs;
  ToTemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type TemplatedJobDependenciesConnection = {
  __typename?: 'TemplatedJobDependenciesConnection';
  edges: Array<TemplatedJobDependenciesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedJobDependenciesEdge = {
  __typename?: 'TemplatedJobDependenciesEdge';
  cursor: Scalars['Base64'];
  node: TemplatedJobDependencies;
  offset: Scalars['Int'];
};

export type TemplatedJobProducts = {
  __typename?: 'TemplatedJobProducts';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Product?: Maybe<Products>;
  ProductId?: Maybe<Scalars['ID']>;
  Qty: Scalars['BigDecimal'];
  TemplatedJob: TemplatedJobs;
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type TemplatedJobProductsConnection = {
  __typename?: 'TemplatedJobProductsConnection';
  edges: Array<TemplatedJobProductsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedJobProductsEdge = {
  __typename?: 'TemplatedJobProductsEdge';
  cursor: Scalars['Base64'];
  node: TemplatedJobProducts;
  offset: Scalars['Int'];
};

export type TemplatedJobTags = {
  __typename?: 'TemplatedJobTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  Tag: Tags;
  TagId: Scalars['ID'];
  TemplatedJob: TemplatedJobs;
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type TemplatedJobTagsConnection = {
  __typename?: 'TemplatedJobTagsConnection';
  edges: Array<TemplatedJobTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedJobTagsEdge = {
  __typename?: 'TemplatedJobTagsEdge';
  cursor: Scalars['Base64'];
  node: TemplatedJobTags;
  offset: Scalars['Int'];
};

export type TemplatedJobTasks = {
  __typename?: 'TemplatedJobTasks';
  Completed: Scalars['Boolean'];
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Name: Scalars['String'];
  Seq: Scalars['Int'];
  TemplatedJob: TemplatedJobs;
  TemplatedJobId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type TemplatedJobTasksConnection = {
  __typename?: 'TemplatedJobTasksConnection';
  edges: Array<TemplatedJobTasksEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedJobTasksEdge = {
  __typename?: 'TemplatedJobTasksEdge';
  cursor: Scalars['Base64'];
  node: TemplatedJobTasks;
  offset: Scalars['Int'];
};

export type TemplatedJobTimeConstraints = {
  __typename?: 'TemplatedJobTimeConstraints';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndBeforeOffsetDays?: Maybe<Scalars['Int']>;
  EndBeforeTimeOfDay?: Maybe<Scalars['LocalTime']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  StartAfterOffsetDays?: Maybe<Scalars['Int']>;
  StartAfterTimeOfDay?: Maybe<Scalars['LocalTime']>;
  StartBeforeOffsetDays?: Maybe<Scalars['Int']>;
  StartBeforeTimeOfDay?: Maybe<Scalars['LocalTime']>;
  TemplatedJob: TemplatedJobs;
  TemplatedJobId: Scalars['ID'];
  Type: Scalars['JobTimeConstraintType'];
  UID: Scalars['ID'];
};

export type TemplatedJobTimeConstraintsConnection = {
  __typename?: 'TemplatedJobTimeConstraintsConnection';
  edges: Array<TemplatedJobTimeConstraintsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedJobTimeConstraintsEdge = {
  __typename?: 'TemplatedJobTimeConstraintsEdge';
  cursor: Scalars['Base64'];
  node: TemplatedJobTimeConstraints;
  offset: Scalars['Int'];
};

export type TemplatedJobs = {
  __typename?: 'TemplatedJobs';
  Account?: Maybe<Accounts>;
  AccountId?: Maybe<Scalars['ID']>;
  Address?: Maybe<Scalars['String']>;
  AutoSchedule: Scalars['Boolean'];
  CanBeDeclined: Scalars['Boolean'];
  Contact?: Maybe<Contacts>;
  ContactId?: Maybe<Scalars['ID']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  CustomerConfirmationStatus?: Maybe<Scalars['CustomerConfirmationStatus']>;
  Description?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']>;
  IsGroupEvent: Scalars['Boolean'];
  JobAllocationTimeSource: Scalars['Boolean'];
  Jobs: Array<Jobs>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Location?: Maybe<Locations>;
  LocationId?: Maybe<Scalars['ID']>;
  Locked: Scalars['Boolean'];
  MaxAttendees?: Maybe<Scalars['Int']>;
  MinAttendees?: Maybe<Scalars['Int']>;
  NotesComments?: Maybe<Scalars['String']>;
  NotifyPeriod?: Maybe<Scalars['Int']>;
  Quantity?: Maybe<Scalars['Int']>;
  Region: Regions;
  RegionId: Scalars['ID'];
  ScheduleTemplate: ScheduleTemplates;
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  TemplatedAttendees: Array<TemplatedAttendees>;
  TemplatedJobAllocations: Array<TemplatedJobAllocations>;
  TemplatedJobDependenciesFrom: Array<TemplatedJobDependencies>;
  TemplatedJobDependenciesTo: Array<TemplatedJobDependencies>;
  TemplatedJobProducts: Array<TemplatedJobProducts>;
  TemplatedJobTags: Array<TemplatedJobTags>;
  TemplatedJobTasks: Array<TemplatedJobTasks>;
  TemplatedJobTimeConstraints: Array<TemplatedJobTimeConstraints>;
  TemplatedResourceRequirements: Array<TemplatedResourceRequirements>;
  Type?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
  Urgency?: Maybe<Scalars['String']>;
  VirtualMeetingId?: Maybe<Scalars['String']>;
  VirtualMeetingInfo?: Maybe<Scalars['String']>;
  VirtualMeetingURL?: Maybe<Scalars['String']>;
};


export type TemplatedJobsJobsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']>;
};


export type TemplatedJobsTemplatedAttendeesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedAttendees']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedAttendees']>;
};


export type TemplatedJobsTemplatedJobAllocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobAllocations']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobAllocations']>;
};


export type TemplatedJobsTemplatedJobDependenciesFromArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobDependencies']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobDependencies']>;
};


export type TemplatedJobsTemplatedJobDependenciesToArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobDependencies']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobDependencies']>;
};


export type TemplatedJobsTemplatedJobProductsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobProducts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobProducts']>;
};


export type TemplatedJobsTemplatedJobTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobTags']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobTags']>;
};


export type TemplatedJobsTemplatedJobTasksArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobTasks']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobTasks']>;
};


export type TemplatedJobsTemplatedJobTimeConstraintsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobTimeConstraints']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobTimeConstraints']>;
};


export type TemplatedJobsTemplatedResourceRequirementsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceRequirements']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceRequirements']>;
};

export type TemplatedJobsConnection = {
  __typename?: 'TemplatedJobsConnection';
  edges: Array<TemplatedJobsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedJobsEdge = {
  __typename?: 'TemplatedJobsEdge';
  cursor: Scalars['Base64'];
  node: TemplatedJobs;
  offset: Scalars['Int'];
};

export type TemplatedResourceRequirementTags = {
  __typename?: 'TemplatedResourceRequirementTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  Tag: Tags;
  TagId: Scalars['ID'];
  TemplatedResourceRequirement: TemplatedResourceRequirements;
  TemplatedResourceRequirementId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type TemplatedResourceRequirementTagsConnection = {
  __typename?: 'TemplatedResourceRequirementTagsConnection';
  edges: Array<TemplatedResourceRequirementTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedResourceRequirementTagsEdge = {
  __typename?: 'TemplatedResourceRequirementTagsEdge';
  cursor: Scalars['Base64'];
  node: TemplatedResourceRequirementTags;
  offset: Scalars['Int'];
};

export type TemplatedResourceRequirements = {
  __typename?: 'TemplatedResourceRequirements';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Description?: Maybe<Scalars['String']>;
  JobAllocationTimeSource: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Quantity: Scalars['Int'];
  RelativeStart?: Maybe<Scalars['Duration']>;
  TemplatedJob: TemplatedJobs;
  TemplatedJobAllocations: Array<TemplatedJobAllocations>;
  TemplatedJobId: Scalars['ID'];
  TemplatedTags: Array<TemplatedResourceRequirementTags>;
  UID: Scalars['ID'];
};


export type TemplatedResourceRequirementsTemplatedJobAllocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobAllocations']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobAllocations']>;
};


export type TemplatedResourceRequirementsTemplatedTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceRequirementTags']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceRequirementTags']>;
};

export type TemplatedResourceRequirementsConnection = {
  __typename?: 'TemplatedResourceRequirementsConnection';
  edges: Array<TemplatedResourceRequirementsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedResourceRequirementsEdge = {
  __typename?: 'TemplatedResourceRequirementsEdge';
  cursor: Scalars['Base64'];
  node: TemplatedResourceRequirements;
  offset: Scalars['Int'];
};

export type TemplatedResourceShifts = {
  __typename?: 'TemplatedResourceShifts';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Resource: Resources;
  ResourceId: Scalars['ID'];
  TemplatedShift: TemplatedShifts;
  TemplatedShiftId: Scalars['ID'];
  UID: Scalars['ID'];
};

export type TemplatedResourceShiftsConnection = {
  __typename?: 'TemplatedResourceShiftsConnection';
  edges: Array<TemplatedResourceShiftsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedResourceShiftsEdge = {
  __typename?: 'TemplatedResourceShiftsEdge';
  cursor: Scalars['Base64'];
  node: TemplatedResourceShifts;
  offset: Scalars['Int'];
};

export type TemplatedShiftTags = {
  __typename?: 'TemplatedShiftTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Required: Scalars['Boolean'];
  Tag: Tags;
  TagId: Scalars['ID'];
  TemplatedShift: TemplatedShifts;
  TemplatedShiftId: Scalars['ID'];
  UID: Scalars['ID'];
  Weighting?: Maybe<Scalars['Int']>;
};

export type TemplatedShiftTagsConnection = {
  __typename?: 'TemplatedShiftTagsConnection';
  edges: Array<TemplatedShiftTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedShiftTagsEdge = {
  __typename?: 'TemplatedShiftTagsEdge';
  cursor: Scalars['Base64'];
  node: TemplatedShiftTags;
  offset: Scalars['Int'];
};

export type TemplatedShifts = {
  __typename?: 'TemplatedShifts';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  DisplayName?: Maybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  IsDraft: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Location?: Maybe<Locations>;
  LocationId?: Maybe<Scalars['ID']>;
  Region: Regions;
  RegionId: Scalars['ID'];
  ScheduleTemplate: ScheduleTemplates;
  ScheduleTemplateId: Scalars['ID'];
  Shifts: Array<Shifts>;
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  TemplatedResourceShifts: Array<TemplatedResourceShifts>;
  TemplatedShiftTags: Array<TemplatedShiftTags>;
  UID: Scalars['ID'];
};


export type TemplatedShiftsShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterShifts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShifts']>;
};


export type TemplatedShiftsTemplatedResourceShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceShifts']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceShifts']>;
};


export type TemplatedShiftsTemplatedShiftTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedShiftTags']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedShiftTags']>;
};

export type TemplatedShiftsConnection = {
  __typename?: 'TemplatedShiftsConnection';
  edges: Array<TemplatedShiftsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TemplatedShiftsEdge = {
  __typename?: 'TemplatedShiftsEdge';
  cursor: Scalars['Base64'];
  node: TemplatedShifts;
  offset: Scalars['Int'];
};

export type UpdateAccountResourceScores = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Blacklisted?: InputMaybe<Scalars['Boolean']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Whitelisted?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateAccountTags = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpdateAccounts = {
  ACId?: InputMaybe<Scalars['ID']>;
  AVPId?: InputMaybe<Scalars['ID']>;
  ActiveFromDate?: InputMaybe<Scalars['LocalDate']>;
  ActiveThruDate?: InputMaybe<Scalars['LocalDate']>;
  ActualStartOfCareDate?: InputMaybe<Scalars['LocalDate']>;
  BillingCity?: InputMaybe<Scalars['String']>;
  BillingPostalCode?: InputMaybe<Scalars['String']>;
  BillingState?: InputMaybe<Scalars['String']>;
  BillingStreet?: InputMaybe<Scalars['String']>;
  CaseID?: InputMaybe<Scalars['String']>;
  CaseProgressionStatus?: InputMaybe<Scalars['String']>;
  DateOfBirth?: InputMaybe<Scalars['LocalDate']>;
  DefaultLocationId?: InputMaybe<Scalars['ID']>;
  DischargeDate?: InputMaybe<Scalars['Instant']>;
  Division?: InputMaybe<Scalars['String']>;
  ExternalClientID?: InputMaybe<Scalars['String']>;
  FSMId?: InputMaybe<Scalars['ID']>;
  Fax?: InputMaybe<Scalars['String']>;
  Gender?: InputMaybe<Scalars['String']>;
  HoldDate?: InputMaybe<Scalars['LocalDate']>;
  MRNumber?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  NeedToRecalculateJobsLocation?: InputMaybe<Scalars['Boolean']>;
  ODId?: InputMaybe<Scalars['ID']>;
  PayerLabel?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  PlannedStartOfCareDate?: InputMaybe<Scalars['LocalDate']>;
  PreferredTechnician?: InputMaybe<Scalars['String']>;
  RCDId?: InputMaybe<Scalars['ID']>;
  Rank?: InputMaybe<Scalars['BigDecimal']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  RequiresWhitelist?: InputMaybe<Scalars['Boolean']>;
  ResumeServiceDate?: InputMaybe<Scalars['LocalDate']>;
  SCId?: InputMaybe<Scalars['ID']>;
  ShippingCity?: InputMaybe<Scalars['String']>;
  ShippingPostalCode?: InputMaybe<Scalars['String']>;
  ShippingState?: InputMaybe<Scalars['String']>;
  ShippingStreet?: InputMaybe<Scalars['String']>;
  Status?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateActivities = {
  Address?: InputMaybe<Scalars['String']>;
  CopiedFromId?: InputMaybe<Scalars['ID']>;
  End?: InputMaybe<Scalars['Instant']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Notes?: InputMaybe<Scalars['String']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  TemplatedActivityId?: InputMaybe<Scalars['ID']>;
  Timezone?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateActivityResources = {
  ActivityId?: InputMaybe<Scalars['ID']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateAdminSetting = {
  AllDayEndTime?: InputMaybe<Scalars['String']>;
  AllDayStartTime?: InputMaybe<Scalars['String']>;
  ReadOnlyAvailabilityForm?: InputMaybe<Scalars['Boolean']>;
  UID: Scalars['ID'];
};

export type UpdateAttendees = {
  CancelReason?: InputMaybe<Scalars['String']>;
  ContactId?: InputMaybe<Scalars['ID']>;
  JobId?: InputMaybe<Scalars['ID']>;
  Status?: InputMaybe<Scalars['AttendeeStatus']>;
  TimeCancelled?: InputMaybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type UpdateAvailabilities = {
  Finish?: InputMaybe<Scalars['Instant']>;
  IsAvailable?: InputMaybe<Scalars['Boolean']>;
  Notes?: InputMaybe<Scalars['String']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  Status?: InputMaybe<Scalars['AvailabilityStatus']>;
  Type?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateAvailabilityPatternResources = {
  AvailabilityPatternId?: InputMaybe<Scalars['ID']>;
  End?: InputMaybe<Scalars['Instant']>;
  RepeatEvery?: InputMaybe<Scalars['String']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  Status?: InputMaybe<Scalars['AvailabilityStatus']>;
  UID: Scalars['ID'];
};

export type UpdateAvailabilityPatterns = {
  Description?: InputMaybe<Scalars['String']>;
  Hash?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  Pattern?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateAvailabilityTemplateEntries = {
  AvailabilityTemplateId?: InputMaybe<Scalars['ID']>;
  FinishTime?: InputMaybe<Scalars['Int']>;
  IsAvailable?: InputMaybe<Scalars['Boolean']>;
  StartTime?: InputMaybe<Scalars['Int']>;
  UID: Scalars['ID'];
  Weekday?: InputMaybe<Scalars['Weekday']>;
};

export type UpdateAvailabilityTemplateResources = {
  AvailabilityTemplateId?: InputMaybe<Scalars['ID']>;
  Migrated?: InputMaybe<Scalars['Boolean']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateAvailabilityTemplates = {
  AvailabilityPatternId?: InputMaybe<Scalars['ID']>;
  Finish?: InputMaybe<Scalars['LocalDate']>;
  Global?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
  RepeatEvery?: InputMaybe<Scalars['String']>;
  Start?: InputMaybe<Scalars['LocalDate']>;
  UID: Scalars['ID'];
};

export type UpdateClientAuthorization = {
  AccountId?: InputMaybe<Scalars['ID']>;
  AuthorizationEffectiveDate?: InputMaybe<Scalars['LocalDate']>;
  AuthorizationExpirationDate?: InputMaybe<Scalars['LocalDate']>;
  AuthorizationNotes?: InputMaybe<Scalars['String']>;
  AuthorizationStatus?: InputMaybe<Scalars['String']>;
  CaseProgressionStatus?: InputMaybe<Scalars['String']>;
  DummyTestingField?: InputMaybe<Scalars['BigDecimal']>;
  ExternalID?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  TotalAuthorizedHours?: InputMaybe<Scalars['BigDecimal']>;
  TotalScheduledAuthorizedHours?: InputMaybe<Scalars['BigDecimal']>;
  TotalUsedAuthorizedHours?: InputMaybe<Scalars['BigDecimal']>;
  UID: Scalars['ID'];
};

export type UpdateClientAuthorizationServices = {
  AuthorizedHoursPerWeek?: InputMaybe<Scalars['BigDecimal']>;
  ClientAuthorizationId?: InputMaybe<Scalars['ID']>;
  DummyField?: InputMaybe<Scalars['BigDecimal']>;
  ExternalID?: InputMaybe<Scalars['String']>;
  FamilyAgreedUpon?: InputMaybe<Scalars['BigDecimal']>;
  HoursRemainingAfterChargeCreation?: InputMaybe<Scalars['BigDecimal']>;
  Name?: InputMaybe<Scalars['String']>;
  ServiceType?: InputMaybe<Scalars['String']>;
  TotalAuthorizedServiceHours?: InputMaybe<Scalars['BigDecimal']>;
  TotalScheduledServiceHours?: InputMaybe<Scalars['BigDecimal']>;
  TotalUsedServiceHours?: InputMaybe<Scalars['BigDecimal']>;
  UID: Scalars['ID'];
};

export type UpdateClientAvailabilities = {
  AccountId?: InputMaybe<Scalars['ID']>;
  ContactId?: InputMaybe<Scalars['ID']>;
  End?: InputMaybe<Scalars['Instant']>;
  IsAvailable?: InputMaybe<Scalars['Boolean']>;
  PreferredEnd?: InputMaybe<Scalars['Instant']>;
  PreferredStart?: InputMaybe<Scalars['Instant']>;
  RecurringScheduleId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type UpdateClientAvailabilityTemplate = {
  AccountId?: InputMaybe<Scalars['ID']>;
  AdjustmentType?: InputMaybe<Scalars['String']>;
  AllDay?: InputMaybe<Scalars['Boolean']>;
  DatesOfMonth?: InputMaybe<Array<Scalars['String']>>;
  DaysOfMonth?: InputMaybe<Array<Scalars['String']>>;
  DaysOfWeek?: InputMaybe<Scalars['String']>;
  DaysOfYear?: InputMaybe<Scalars['String']>;
  EndDate?: InputMaybe<Scalars['LocalDate']>;
  EndTime?: InputMaybe<Scalars['LocalTime']>;
  Label?: InputMaybe<Scalars['String']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  MonthsOfYear?: InputMaybe<Array<Scalars['String']>>;
  Note?: InputMaybe<Scalars['String']>;
  Pattern?: InputMaybe<Scalars['String']>;
  StartDate?: InputMaybe<Scalars['LocalDate']>;
  StartTime?: InputMaybe<Scalars['LocalTime']>;
  Type?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateContactTags = {
  ContactId?: InputMaybe<Scalars['ID']>;
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpdateContacts = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Email?: InputMaybe<Scalars['String']>;
  FirstName?: InputMaybe<Scalars['String']>;
  LastName?: InputMaybe<Scalars['String']>;
  MailingCity?: InputMaybe<Scalars['String']>;
  MailingPostalCode?: InputMaybe<Scalars['String']>;
  MailingState?: InputMaybe<Scalars['String']>;
  MailingStreet?: InputMaybe<Scalars['String']>;
  MobilePhone?: InputMaybe<Scalars['String']>;
  OtherCity?: InputMaybe<Scalars['String']>;
  OtherPostalCode?: InputMaybe<Scalars['String']>;
  OtherState?: InputMaybe<Scalars['String']>;
  OtherStreet?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  Title?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateExceptionRecord = {
  ExceptionId?: InputMaybe<Scalars['String']>;
  RuleId?: InputMaybe<Scalars['String']>;
  SourceId?: InputMaybe<Scalars['String']>;
  SourceType?: InputMaybe<Scalars['String']>;
  TargetId?: InputMaybe<Scalars['String']>;
  TargetType?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateExceptionType = {
  Description?: InputMaybe<Scalars['String']>;
  DescriptionTwo?: InputMaybe<Scalars['String']>;
  ExceptionType?: InputMaybe<Scalars['String']>;
  ExceptionType2?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateHolidayRegions = {
  HolidayId?: InputMaybe<Scalars['ID']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateHolidays = {
  EndDate?: InputMaybe<Scalars['LocalDate']>;
  Global?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
  StartDate?: InputMaybe<Scalars['LocalDate']>;
  UID: Scalars['ID'];
};

export type UpdateJobAllocations = {
  DeclineDescription?: InputMaybe<Scalars['String']>;
  DeclineReason?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  End?: InputMaybe<Scalars['Instant']>;
  EstimatedTravelDistance?: InputMaybe<Scalars['BigDecimal']>;
  EstimatedTravelTime?: InputMaybe<Scalars['Duration']>;
  GeoCheckedInLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoCheckedInLongitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoCompletedLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoCompletedLongitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoInProgressLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoInProgressLongitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoStartTravelLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoStartTravelLongitude?: InputMaybe<Scalars['BigDecimal']>;
  JobId?: InputMaybe<Scalars['ID']>;
  NotificationType?: InputMaybe<Scalars['String']>;
  PhoneResponse?: InputMaybe<Scalars['String']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  ResourceRequirementId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  Status?: InputMaybe<Scalars['JobAllocationStatus']>;
  TeamLeader?: InputMaybe<Scalars['Boolean']>;
  TimeCheckedIn?: InputMaybe<Scalars['Instant']>;
  TimeCompleted?: InputMaybe<Scalars['Instant']>;
  TimeInProgress?: InputMaybe<Scalars['Instant']>;
  TimePublished?: InputMaybe<Scalars['Instant']>;
  TimeResponded?: InputMaybe<Scalars['Instant']>;
  TimeStartTravel?: InputMaybe<Scalars['Instant']>;
  TravelDistance?: InputMaybe<Scalars['BigDecimal']>;
  TravelTime?: InputMaybe<Scalars['Duration']>;
  UID: Scalars['ID'];
};

export type UpdateJobDependencies = {
  FromAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  FromJobId?: InputMaybe<Scalars['ID']>;
  ToAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  ToAnchorMaxOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToJobId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateJobOffers = {
  CreatedByResource?: InputMaybe<Scalars['Boolean']>;
  JobId?: InputMaybe<Scalars['ID']>;
  ResourceRequirementId?: InputMaybe<Scalars['ID']>;
  Status?: InputMaybe<Scalars['OfferStatus']>;
  UID: Scalars['ID'];
};

export type UpdateJobProducts = {
  JobId?: InputMaybe<Scalars['ID']>;
  ProductId?: InputMaybe<Scalars['ID']>;
  Qty?: InputMaybe<Scalars['BigDecimal']>;
  UID: Scalars['ID'];
};

export type UpdateJobTags = {
  JobId?: InputMaybe<Scalars['ID']>;
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpdateJobTasks = {
  Completed?: InputMaybe<Scalars['Boolean']>;
  Description?: InputMaybe<Scalars['String']>;
  JobId?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
  Seq?: InputMaybe<Scalars['Int']>;
  UID: Scalars['ID'];
};

export type UpdateJobTimeConstraints = {
  EndBefore?: InputMaybe<Scalars['Instant']>;
  JobId?: InputMaybe<Scalars['ID']>;
  Required?: InputMaybe<Scalars['Boolean']>;
  StartAfter?: InputMaybe<Scalars['Instant']>;
  StartBefore?: InputMaybe<Scalars['Instant']>;
  Type?: InputMaybe<Scalars['JobTimeConstraintType']>;
  UID: Scalars['ID'];
};

export type UpdateJobs = {
  AbortReason?: InputMaybe<Scalars['String']>;
  AccountId?: InputMaybe<Scalars['ID']>;
  ActualEnd?: InputMaybe<Scalars['Instant']>;
  ActualStart?: InputMaybe<Scalars['Instant']>;
  Address?: InputMaybe<Scalars['String']>;
  AuthorizationServiceId?: InputMaybe<Scalars['ID']>;
  AuthorizedHoursPerWeek?: InputMaybe<Scalars['BigDecimal']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']>;
  CanBeDeclined?: InputMaybe<Scalars['Boolean']>;
  ClearOfExceptions?: InputMaybe<Scalars['Boolean']>;
  ClientAuthorizationId?: InputMaybe<Scalars['ID']>;
  CompletionNotes?: InputMaybe<Scalars['String']>;
  ContactId?: InputMaybe<Scalars['ID']>;
  CopiedFromId?: InputMaybe<Scalars['ID']>;
  CustomerConfirmationStatus?: InputMaybe<Scalars['CustomerConfirmationStatus']>;
  Description?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  End?: InputMaybe<Scalars['Instant']>;
  EstimatedEnd?: InputMaybe<Scalars['Instant']>;
  EstimatedStart?: InputMaybe<Scalars['Instant']>;
  FamilyAgreedUpon?: InputMaybe<Scalars['BigDecimal']>;
  FollowupReason?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  IsGroupEvent?: InputMaybe<Scalars['Boolean']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  JobStatus?: InputMaybe<Scalars['JobStatus']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  LocationType?: InputMaybe<Scalars['String']>;
  Locked?: InputMaybe<Scalars['Boolean']>;
  MaxAttendees?: InputMaybe<Scalars['Int']>;
  MinAttendees?: InputMaybe<Scalars['Int']>;
  Name?: InputMaybe<Scalars['String']>;
  NotesComments?: InputMaybe<Scalars['String']>;
  NotifyBy?: InputMaybe<Scalars['Instant']>;
  NotifyPeriod?: InputMaybe<Scalars['Int']>;
  ParentId?: InputMaybe<Scalars['ID']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  RecurringScheduleId?: InputMaybe<Scalars['ID']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']>;
  TotalAuthorizedServiceHours?: InputMaybe<Scalars['BigDecimal']>;
  Type?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
  Urgency?: InputMaybe<Scalars['String']>;
  VirtualMeetingId?: InputMaybe<Scalars['String']>;
  VirtualMeetingInfo?: InputMaybe<Scalars['String']>;
  VirtualMeetingURL?: InputMaybe<Scalars['String']>;
};

export type UpdateLocationResourceScores = {
  Blacklisted?: InputMaybe<Scalars['Boolean']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Whitelisted?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateLocations = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Address?: InputMaybe<Scalars['String']>;
  Default?: InputMaybe<Scalars['Boolean']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  Name?: InputMaybe<Scalars['String']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  RequiresWhitelist?: InputMaybe<Scalars['Boolean']>;
  Type?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateLogger = {
  Message?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateProducts = {
  Description?: InputMaybe<Scalars['String']>;
  Family?: InputMaybe<Scalars['String']>;
  IsActive?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
  ProductCode?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateRecurringSchedules = {
  AckAllJobs?: InputMaybe<Scalars['Boolean']>;
  Description?: InputMaybe<Scalars['String']>;
  Pattern?: InputMaybe<Scalars['String']>;
  Summary?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateRegions = {
  CountryCode?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  Name?: InputMaybe<Scalars['String']>;
  Radius?: InputMaybe<Scalars['Int']>;
  Timezone?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateResourceJobOffers = {
  JobOfferId?: InputMaybe<Scalars['ID']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  Response?: InputMaybe<Scalars['OfferResponse']>;
  Status?: InputMaybe<Scalars['ResourceOfferStatus']>;
  TimeNotified?: InputMaybe<Scalars['Instant']>;
  TimeResponded?: InputMaybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type UpdateResourceOverrideRegions = {
  RegionId?: InputMaybe<Scalars['ID']>;
  ResourceOverrideId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateResourceOverrides = {
  Description?: InputMaybe<Scalars['String']>;
  End?: InputMaybe<Scalars['Instant']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  HomeAddress?: InputMaybe<Scalars['String']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type UpdateResourceRegions = {
  End?: InputMaybe<Scalars['Instant']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type UpdateResourceRequirementTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  ResourceRequirementId?: InputMaybe<Scalars['ID']>;
  TagId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpdateResourceRequirements = {
  Description?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  JobId?: InputMaybe<Scalars['ID']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  RelativeStart?: InputMaybe<Scalars['Duration']>;
  ScheduledEnd?: InputMaybe<Scalars['Instant']>;
  ScheduledStart?: InputMaybe<Scalars['Instant']>;
  Status?: InputMaybe<Scalars['JobStatus']>;
  UID: Scalars['ID'];
};

export type UpdateResourceShiftBreaks = {
  End?: InputMaybe<Scalars['Instant']>;
  ResourceShiftId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type UpdateResourceShiftOffers = {
  ResourceId?: InputMaybe<Scalars['ID']>;
  Response?: InputMaybe<Scalars['OfferResponse']>;
  ShiftOfferId?: InputMaybe<Scalars['ID']>;
  Status?: InputMaybe<Scalars['ResourceOfferStatus']>;
  TimeNotified?: InputMaybe<Scalars['Instant']>;
  TimeResponded?: InputMaybe<Scalars['Instant']>;
  UID: Scalars['ID'];
};

export type UpdateResourceShifts = {
  ActualEnd?: InputMaybe<Scalars['Instant']>;
  ActualStart?: InputMaybe<Scalars['Instant']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  ShiftId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateResourceTags = {
  ExpiryDate?: InputMaybe<Scalars['Instant']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  TagId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateResources = {
  Alias?: InputMaybe<Scalars['String']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']>;
  CareConnectUserID?: InputMaybe<Scalars['BigDecimal']>;
  Category?: InputMaybe<Scalars['String']>;
  CountryCode?: InputMaybe<Scalars['String']>;
  EffectiveTerminationDate?: InputMaybe<Scalars['Instant']>;
  Email?: InputMaybe<Scalars['String']>;
  EmploymentType?: InputMaybe<Scalars['String']>;
  FSM?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  HomeAddress?: InputMaybe<Scalars['String']>;
  IsActive?: InputMaybe<Scalars['Boolean']>;
  MobilePhone?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  Notes?: InputMaybe<Scalars['String']>;
  NotificationType?: InputMaybe<Scalars['String']>;
  PrimaryPhone?: InputMaybe<Scalars['String']>;
  PrimaryRegionId?: InputMaybe<Scalars['ID']>;
  Rating?: InputMaybe<Scalars['Int']>;
  ReportsTo?: InputMaybe<Scalars['String']>;
  RequestedWorkingHoursPerWeek?: InputMaybe<Scalars['BigDecimal']>;
  ResourceType?: InputMaybe<Scalars['String']>;
  TotalUtilizedHours?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
  UserId?: InputMaybe<Scalars['ID']>;
  WeeklyHours?: InputMaybe<Scalars['BigDecimal']>;
  WorkingHourType?: InputMaybe<Scalars['WorkingHourType']>;
  amsuserstatus?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  complianceissue?: InputMaybe<Scalars['String']>;
  degreetypelab?: InputMaybe<Scalars['String']>;
  estimatedactivationtimestamp?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  homephone?: InputMaybe<Scalars['String']>;
  middleInitial?: InputMaybe<Scalars['String']>;
  npi?: InputMaybe<Scalars['String']>;
  onboardingstatuslabel?: InputMaybe<Scalars['String']>;
  personalemail?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  uniqueeid?: InputMaybe<Scalars['String']>;
  worksfor?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type UpdateScheduleTemplates = {
  DeletedById?: InputMaybe<Scalars['ID']>;
  DeletedDate?: InputMaybe<Scalars['Instant']>;
  Description?: InputMaybe<Scalars['String']>;
  IsDeleted?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
  PeriodDays?: InputMaybe<Scalars['Int']>;
  UID: Scalars['ID'];
};

export type UpdateShiftOfferShifts = {
  ShiftId?: InputMaybe<Scalars['ID']>;
  ShiftOfferId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateShiftOffers = {
  Status?: InputMaybe<Scalars['OfferStatus']>;
  UID: Scalars['ID'];
};

export type UpdateShiftTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  ShiftId?: InputMaybe<Scalars['ID']>;
  TagId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpdateShifts = {
  CopiedFromId?: InputMaybe<Scalars['ID']>;
  DisplayName?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  End?: InputMaybe<Scalars['Instant']>;
  IsDraft?: InputMaybe<Scalars['Boolean']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  TemplatedShiftId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateStarterTest = {
  ResourceId?: InputMaybe<Scalars['ID']>;
  StarterTestBooleanField?: InputMaybe<Scalars['Boolean']>;
  StarterTestDecimalField?: InputMaybe<Scalars['BigDecimal']>;
  StarterTestPicklistField?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateTagManagerSettings = {
  ExpiredReminder?: InputMaybe<Scalars['Boolean']>;
  ExpiredReminderTemplate?: InputMaybe<Scalars['String']>;
  ExpiringSoonReminderDays?: InputMaybe<Scalars['BigDecimal']>;
  ExpiringSoonReminderEnabled?: InputMaybe<Scalars['Boolean']>;
  ExpiringSoonReminderTemplate?: InputMaybe<Scalars['String']>;
  LongLiveToken?: InputMaybe<Scalars['String']>;
  NotifyExpiringTagOffset1?: InputMaybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset2?: InputMaybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset3?: InputMaybe<Scalars['BigDecimal']>;
  ReminderSendTime?: InputMaybe<Scalars['BigDecimal']>;
  ReminderTimezone?: InputMaybe<Scalars['String']>;
  RemindersEnabled?: InputMaybe<Scalars['Boolean']>;
  UID: Scalars['ID'];
};

export type UpdateTagRequest = {
  IsRenewal?: InputMaybe<Scalars['Boolean']>;
  NewExpiryDate?: InputMaybe<Scalars['LocalDate']>;
  OldExpiryDate?: InputMaybe<Scalars['LocalDate']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  Status?: InputMaybe<Scalars['String']>;
  TagAssignmentId?: InputMaybe<Scalars['ID']>;
  TagId?: InputMaybe<Scalars['ID']>;
  TagName?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateTags = {
  Classification?: InputMaybe<Scalars['TagClassification']>;
  Groups?: InputMaybe<Array<Scalars['String']>>;
  IsRequestable?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
  NotVisibleToResources?: InputMaybe<Scalars['Boolean']>;
  RequestEvidence?: InputMaybe<Scalars['Boolean']>;
  RequiresExpiryDate?: InputMaybe<Scalars['Boolean']>;
  Type?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedActivities = {
  Address?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Notes?: InputMaybe<Scalars['String']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  StartOffsetDays?: InputMaybe<Scalars['Int']>;
  StartTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  Timezone?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedActivityResources = {
  ResourceId?: InputMaybe<Scalars['ID']>;
  TemplatedActivityId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedAttendees = {
  ContactId?: InputMaybe<Scalars['ID']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedJobAllocations = {
  Duration?: InputMaybe<Scalars['Duration']>;
  NotificationType?: InputMaybe<Scalars['String']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  StartOffsetDays?: InputMaybe<Scalars['Int']>;
  StartTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  Status?: InputMaybe<Scalars['JobAllocationStatus']>;
  TeamLeader?: InputMaybe<Scalars['Boolean']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']>;
  TemplatedResourceRequirementId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedJobDependencies = {
  FromAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  FromTemplatedJobId?: InputMaybe<Scalars['ID']>;
  ToAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  ToAnchorMaxOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToTemplatedJobId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedJobProducts = {
  ProductId?: InputMaybe<Scalars['ID']>;
  Qty?: InputMaybe<Scalars['BigDecimal']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedJobTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId?: InputMaybe<Scalars['ID']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpdateTemplatedJobTasks = {
  Completed?: InputMaybe<Scalars['Boolean']>;
  Description?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  Seq?: InputMaybe<Scalars['Int']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedJobTimeConstraints = {
  EndBeforeOffsetDays?: InputMaybe<Scalars['Int']>;
  EndBeforeTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  Required?: InputMaybe<Scalars['Boolean']>;
  StartAfterOffsetDays?: InputMaybe<Scalars['Int']>;
  StartAfterTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  StartBeforeOffsetDays?: InputMaybe<Scalars['Int']>;
  StartBeforeTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']>;
  Type?: InputMaybe<Scalars['JobTimeConstraintType']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedJobs = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Address?: InputMaybe<Scalars['String']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']>;
  CanBeDeclined?: InputMaybe<Scalars['Boolean']>;
  ContactId?: InputMaybe<Scalars['ID']>;
  CustomerConfirmationStatus?: InputMaybe<Scalars['CustomerConfirmationStatus']>;
  Description?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  IsGroupEvent?: InputMaybe<Scalars['Boolean']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Locked?: InputMaybe<Scalars['Boolean']>;
  MaxAttendees?: InputMaybe<Scalars['Int']>;
  MinAttendees?: InputMaybe<Scalars['Int']>;
  NotesComments?: InputMaybe<Scalars['String']>;
  NotifyPeriod?: InputMaybe<Scalars['Int']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  StartOffsetDays?: InputMaybe<Scalars['Int']>;
  StartTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  Type?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
  Urgency?: InputMaybe<Scalars['String']>;
  VirtualMeetingId?: InputMaybe<Scalars['String']>;
  VirtualMeetingInfo?: InputMaybe<Scalars['String']>;
  VirtualMeetingURL?: InputMaybe<Scalars['String']>;
};

export type UpdateTemplatedResourceRequirementTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId?: InputMaybe<Scalars['ID']>;
  TemplatedResourceRequirementId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpdateTemplatedResourceRequirements = {
  Description?: InputMaybe<Scalars['String']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  RelativeStart?: InputMaybe<Scalars['Duration']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedResourceShifts = {
  ResourceId?: InputMaybe<Scalars['ID']>;
  TemplatedShiftId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
};

export type UpdateTemplatedShiftTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId?: InputMaybe<Scalars['ID']>;
  TemplatedShiftId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpdateTemplatedShifts = {
  DisplayName?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  IsDraft?: InputMaybe<Scalars['Boolean']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  StartOffsetDays?: InputMaybe<Scalars['Int']>;
  StartTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  UID: Scalars['ID'];
};

export type UpdateUserRegions = {
  RegionId?: InputMaybe<Scalars['ID']>;
  UID: Scalars['ID'];
  UserId?: InputMaybe<Scalars['ID']>;
};

export type UpdateUser_Ext = {
  CareConnectUserID?: InputMaybe<Scalars['String']>;
  UID: Scalars['ID'];
  uniqueeid?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type UpdateclientAvailabilityTemplateEntry = {
  AllDay?: InputMaybe<Scalars['Boolean']>;
  ClientAvailabilityTemplateId?: InputMaybe<Scalars['ID']>;
  EndTime?: InputMaybe<Scalars['LocalTime']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
  StartTime?: InputMaybe<Scalars['LocalTime']>;
  UID: Scalars['ID'];
  Weekday?: InputMaybe<Scalars['String']>;
};

export type Updatesked_BroadcastRecipients = {
  UID: Scalars['ID'];
  sked_BroadcastId?: InputMaybe<Scalars['ID']>;
  sked_ContactId?: InputMaybe<Scalars['ID']>;
  sked_Date?: InputMaybe<Scalars['LocalDate']>;
  sked_ErrorInformation?: InputMaybe<Scalars['String']>;
  sked_NotificationMethod?: InputMaybe<Scalars['String']>;
  sked_Phone?: InputMaybe<Scalars['String']>;
  sked_ResourceId?: InputMaybe<Scalars['ID']>;
  sked_Status?: InputMaybe<Scalars['String']>;
  sked_Timestamp?: InputMaybe<Scalars['String']>;
};

export type Updatesked_Broadcasts = {
  UID: Scalars['ID'];
  sked_Broadcast?: InputMaybe<Scalars['String']>;
  sked_Date?: InputMaybe<Scalars['LocalDate']>;
  sked_NotSent?: InputMaybe<Scalars['BigDecimal']>;
  sked_NotificationMethod?: InputMaybe<Scalars['String']>;
  sked_RecipientType?: InputMaybe<Scalars['String']>;
  sked_Sent?: InputMaybe<Scalars['BigDecimal']>;
  sked_Timestamp?: InputMaybe<Scalars['String']>;
  sked_TotalRecipients?: InputMaybe<Scalars['BigDecimal']>;
};

export type UpsertAccountResourceScores = {
  AccountId: Scalars['ID'];
  Blacklisted?: InputMaybe<Scalars['Boolean']>;
  ResourceId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  Whitelisted?: InputMaybe<Scalars['Boolean']>;
};

export type UpsertAccountTags = {
  AccountId: Scalars['ID'];
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpsertAccounts = {
  ACId?: InputMaybe<Scalars['ID']>;
  AVPId?: InputMaybe<Scalars['ID']>;
  ActiveFromDate?: InputMaybe<Scalars['LocalDate']>;
  ActiveThruDate?: InputMaybe<Scalars['LocalDate']>;
  ActualStartOfCareDate?: InputMaybe<Scalars['LocalDate']>;
  BillingCity?: InputMaybe<Scalars['String']>;
  BillingPostalCode?: InputMaybe<Scalars['String']>;
  BillingState?: InputMaybe<Scalars['String']>;
  BillingStreet?: InputMaybe<Scalars['String']>;
  CaseID?: InputMaybe<Scalars['String']>;
  CaseProgressionStatus?: InputMaybe<Scalars['String']>;
  DateOfBirth?: InputMaybe<Scalars['LocalDate']>;
  DefaultLocationId?: InputMaybe<Scalars['ID']>;
  DischargeDate?: InputMaybe<Scalars['Instant']>;
  Division?: InputMaybe<Scalars['String']>;
  ExternalClientID?: InputMaybe<Scalars['String']>;
  FSMId?: InputMaybe<Scalars['ID']>;
  Fax?: InputMaybe<Scalars['String']>;
  Gender?: InputMaybe<Scalars['String']>;
  HoldDate?: InputMaybe<Scalars['LocalDate']>;
  MRNumber?: InputMaybe<Scalars['String']>;
  Name: Scalars['String'];
  NeedToRecalculateJobsLocation?: InputMaybe<Scalars['Boolean']>;
  ODId?: InputMaybe<Scalars['ID']>;
  PayerLabel?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  PlannedStartOfCareDate?: InputMaybe<Scalars['LocalDate']>;
  PreferredTechnician?: InputMaybe<Scalars['String']>;
  RCDId?: InputMaybe<Scalars['ID']>;
  Rank?: InputMaybe<Scalars['BigDecimal']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  RequiresWhitelist?: InputMaybe<Scalars['Boolean']>;
  ResumeServiceDate?: InputMaybe<Scalars['LocalDate']>;
  SCId?: InputMaybe<Scalars['ID']>;
  ShippingCity?: InputMaybe<Scalars['String']>;
  ShippingPostalCode?: InputMaybe<Scalars['String']>;
  ShippingState?: InputMaybe<Scalars['String']>;
  ShippingStreet?: InputMaybe<Scalars['String']>;
  Status?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertActivities = {
  Address?: InputMaybe<Scalars['String']>;
  CopiedFromId?: InputMaybe<Scalars['ID']>;
  End: Scalars['Instant'];
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Notes?: InputMaybe<Scalars['String']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  TemplatedActivityId?: InputMaybe<Scalars['ID']>;
  Timezone?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertActivityResources = {
  ActivityId: Scalars['ID'];
  ResourceId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertAdminSetting = {
  AllDayEndTime?: InputMaybe<Scalars['String']>;
  AllDayStartTime?: InputMaybe<Scalars['String']>;
  ReadOnlyAvailabilityForm?: InputMaybe<Scalars['Boolean']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertAttendees = {
  CancelReason?: InputMaybe<Scalars['String']>;
  ContactId: Scalars['ID'];
  JobId: Scalars['ID'];
  Status?: InputMaybe<Scalars['AttendeeStatus']>;
  TimeCancelled?: InputMaybe<Scalars['Instant']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertAvailabilities = {
  Finish: Scalars['Instant'];
  IsAvailable?: InputMaybe<Scalars['Boolean']>;
  Notes?: InputMaybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  Status?: InputMaybe<Scalars['AvailabilityStatus']>;
  Type?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertAvailabilityPatternResources = {
  AvailabilityPatternId: Scalars['ID'];
  End?: InputMaybe<Scalars['Instant']>;
  RepeatEvery?: InputMaybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  Status?: InputMaybe<Scalars['AvailabilityStatus']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertAvailabilityPatterns = {
  Description?: InputMaybe<Scalars['String']>;
  Hash: Scalars['String'];
  Name: Scalars['String'];
  Pattern: Scalars['String'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertAvailabilityTemplateEntries = {
  AvailabilityTemplateId: Scalars['ID'];
  FinishTime: Scalars['Int'];
  IsAvailable?: InputMaybe<Scalars['Boolean']>;
  StartTime: Scalars['Int'];
  UID?: InputMaybe<Scalars['ID']>;
  Weekday: Scalars['Weekday'];
};

export type UpsertAvailabilityTemplateResources = {
  AvailabilityTemplateId: Scalars['ID'];
  Migrated?: InputMaybe<Scalars['Boolean']>;
  ResourceId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertAvailabilityTemplates = {
  AvailabilityPatternId?: InputMaybe<Scalars['ID']>;
  Finish?: InputMaybe<Scalars['LocalDate']>;
  Global?: InputMaybe<Scalars['Boolean']>;
  Name?: InputMaybe<Scalars['String']>;
  RepeatEvery?: InputMaybe<Scalars['String']>;
  Start?: InputMaybe<Scalars['LocalDate']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertClientAuthorization = {
  AccountId?: InputMaybe<Scalars['ID']>;
  AuthorizationEffectiveDate?: InputMaybe<Scalars['LocalDate']>;
  AuthorizationExpirationDate?: InputMaybe<Scalars['LocalDate']>;
  AuthorizationNotes?: InputMaybe<Scalars['String']>;
  AuthorizationStatus?: InputMaybe<Scalars['String']>;
  CaseProgressionStatus?: InputMaybe<Scalars['String']>;
  DummyTestingField?: InputMaybe<Scalars['BigDecimal']>;
  ExternalID?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  TotalAuthorizedHours?: InputMaybe<Scalars['BigDecimal']>;
  TotalScheduledAuthorizedHours?: InputMaybe<Scalars['BigDecimal']>;
  TotalUsedAuthorizedHours?: InputMaybe<Scalars['BigDecimal']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertClientAuthorizationServices = {
  AuthorizedHoursPerWeek?: InputMaybe<Scalars['BigDecimal']>;
  ClientAuthorizationId?: InputMaybe<Scalars['ID']>;
  DummyField?: InputMaybe<Scalars['BigDecimal']>;
  ExternalID?: InputMaybe<Scalars['String']>;
  FamilyAgreedUpon?: InputMaybe<Scalars['BigDecimal']>;
  HoursRemainingAfterChargeCreation?: InputMaybe<Scalars['BigDecimal']>;
  Name?: InputMaybe<Scalars['String']>;
  ServiceType?: InputMaybe<Scalars['String']>;
  TotalAuthorizedServiceHours?: InputMaybe<Scalars['BigDecimal']>;
  TotalScheduledServiceHours?: InputMaybe<Scalars['BigDecimal']>;
  TotalUsedServiceHours?: InputMaybe<Scalars['BigDecimal']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertClientAvailabilities = {
  AccountId?: InputMaybe<Scalars['ID']>;
  ContactId?: InputMaybe<Scalars['ID']>;
  End: Scalars['Instant'];
  IsAvailable?: InputMaybe<Scalars['Boolean']>;
  PreferredEnd?: InputMaybe<Scalars['Instant']>;
  PreferredStart?: InputMaybe<Scalars['Instant']>;
  RecurringScheduleId?: InputMaybe<Scalars['ID']>;
  Start: Scalars['Instant'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertClientAvailabilityTemplate = {
  AccountId?: InputMaybe<Scalars['ID']>;
  AdjustmentType?: InputMaybe<Scalars['String']>;
  AllDay?: InputMaybe<Scalars['Boolean']>;
  DatesOfMonth?: InputMaybe<Array<Scalars['String']>>;
  DaysOfMonth?: InputMaybe<Array<Scalars['String']>>;
  DaysOfWeek?: InputMaybe<Scalars['String']>;
  DaysOfYear?: InputMaybe<Scalars['String']>;
  EndDate?: InputMaybe<Scalars['LocalDate']>;
  EndTime?: InputMaybe<Scalars['LocalTime']>;
  Label?: InputMaybe<Scalars['String']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  MonthsOfYear?: InputMaybe<Array<Scalars['String']>>;
  Note?: InputMaybe<Scalars['String']>;
  Pattern?: InputMaybe<Scalars['String']>;
  StartDate?: InputMaybe<Scalars['LocalDate']>;
  StartTime?: InputMaybe<Scalars['LocalTime']>;
  Type?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertContactTags = {
  ContactId: Scalars['ID'];
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpsertContacts = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Email?: InputMaybe<Scalars['String']>;
  FirstName?: InputMaybe<Scalars['String']>;
  LastName: Scalars['String'];
  MailingCity?: InputMaybe<Scalars['String']>;
  MailingPostalCode?: InputMaybe<Scalars['String']>;
  MailingState?: InputMaybe<Scalars['String']>;
  MailingStreet?: InputMaybe<Scalars['String']>;
  MobilePhone?: InputMaybe<Scalars['String']>;
  OtherCity?: InputMaybe<Scalars['String']>;
  OtherPostalCode?: InputMaybe<Scalars['String']>;
  OtherState?: InputMaybe<Scalars['String']>;
  OtherStreet?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  Title?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertExceptionRecord = {
  ExceptionId?: InputMaybe<Scalars['String']>;
  RuleId?: InputMaybe<Scalars['String']>;
  SourceId?: InputMaybe<Scalars['String']>;
  SourceType?: InputMaybe<Scalars['String']>;
  TargetId?: InputMaybe<Scalars['String']>;
  TargetType?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertExceptionType = {
  Description?: InputMaybe<Scalars['String']>;
  DescriptionTwo?: InputMaybe<Scalars['String']>;
  ExceptionType: Scalars['String'];
  ExceptionType2: Scalars['String'];
  Name?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertHolidayRegions = {
  HolidayId: Scalars['ID'];
  RegionId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertHolidays = {
  EndDate: Scalars['LocalDate'];
  Global?: InputMaybe<Scalars['Boolean']>;
  Name: Scalars['String'];
  StartDate: Scalars['LocalDate'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertJobAllocations = {
  DeclineDescription?: InputMaybe<Scalars['String']>;
  DeclineReason?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  End?: InputMaybe<Scalars['Instant']>;
  EstimatedTravelDistance?: InputMaybe<Scalars['BigDecimal']>;
  EstimatedTravelTime?: InputMaybe<Scalars['Duration']>;
  GeoCheckedInLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoCheckedInLongitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoCompletedLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoCompletedLongitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoInProgressLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoInProgressLongitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoStartTravelLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoStartTravelLongitude?: InputMaybe<Scalars['BigDecimal']>;
  JobId: Scalars['ID'];
  NotificationType?: InputMaybe<Scalars['String']>;
  PhoneResponse?: InputMaybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  ResourceRequirementId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  Status?: InputMaybe<Scalars['JobAllocationStatus']>;
  TeamLeader?: InputMaybe<Scalars['Boolean']>;
  TimeCheckedIn?: InputMaybe<Scalars['Instant']>;
  TimeCompleted?: InputMaybe<Scalars['Instant']>;
  TimeInProgress?: InputMaybe<Scalars['Instant']>;
  TimePublished?: InputMaybe<Scalars['Instant']>;
  TimeResponded?: InputMaybe<Scalars['Instant']>;
  TimeStartTravel?: InputMaybe<Scalars['Instant']>;
  TravelDistance?: InputMaybe<Scalars['BigDecimal']>;
  TravelTime?: InputMaybe<Scalars['Duration']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertJobDependencies = {
  FromAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  FromJobId: Scalars['ID'];
  ToAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  ToAnchorMaxOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToJobId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertJobOffers = {
  CreatedByResource?: InputMaybe<Scalars['Boolean']>;
  JobId: Scalars['ID'];
  ResourceRequirementId?: InputMaybe<Scalars['ID']>;
  Status?: InputMaybe<Scalars['OfferStatus']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertJobProducts = {
  JobId: Scalars['ID'];
  ProductId?: InputMaybe<Scalars['ID']>;
  Qty: Scalars['BigDecimal'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertJobTags = {
  JobId: Scalars['ID'];
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpsertJobTasks = {
  Completed?: InputMaybe<Scalars['Boolean']>;
  Description?: InputMaybe<Scalars['String']>;
  JobId: Scalars['ID'];
  Name: Scalars['String'];
  Seq: Scalars['Int'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertJobTimeConstraints = {
  EndBefore?: InputMaybe<Scalars['Instant']>;
  JobId: Scalars['ID'];
  Required?: InputMaybe<Scalars['Boolean']>;
  StartAfter?: InputMaybe<Scalars['Instant']>;
  StartBefore?: InputMaybe<Scalars['Instant']>;
  Type?: InputMaybe<Scalars['JobTimeConstraintType']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertJobs = {
  AbortReason?: InputMaybe<Scalars['String']>;
  AccountId?: InputMaybe<Scalars['ID']>;
  ActualEnd?: InputMaybe<Scalars['Instant']>;
  ActualStart?: InputMaybe<Scalars['Instant']>;
  Address?: InputMaybe<Scalars['String']>;
  AuthorizationServiceId?: InputMaybe<Scalars['ID']>;
  AuthorizedHoursPerWeek?: InputMaybe<Scalars['BigDecimal']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']>;
  CanBeDeclined?: InputMaybe<Scalars['Boolean']>;
  ClearOfExceptions?: InputMaybe<Scalars['Boolean']>;
  ClientAuthorizationId?: InputMaybe<Scalars['ID']>;
  CompletionNotes?: InputMaybe<Scalars['String']>;
  ContactId?: InputMaybe<Scalars['ID']>;
  CopiedFromId?: InputMaybe<Scalars['ID']>;
  CustomerConfirmationStatus?: InputMaybe<Scalars['CustomerConfirmationStatus']>;
  Description?: InputMaybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  End?: InputMaybe<Scalars['Instant']>;
  EstimatedEnd?: InputMaybe<Scalars['Instant']>;
  EstimatedStart?: InputMaybe<Scalars['Instant']>;
  FamilyAgreedUpon?: InputMaybe<Scalars['BigDecimal']>;
  FollowupReason?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  IsGroupEvent?: InputMaybe<Scalars['Boolean']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  JobStatus?: InputMaybe<Scalars['JobStatus']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  LocationType?: InputMaybe<Scalars['String']>;
  Locked?: InputMaybe<Scalars['Boolean']>;
  MaxAttendees?: InputMaybe<Scalars['Int']>;
  MinAttendees?: InputMaybe<Scalars['Int']>;
  Name?: InputMaybe<Scalars['String']>;
  NotesComments?: InputMaybe<Scalars['String']>;
  NotifyBy?: InputMaybe<Scalars['Instant']>;
  NotifyPeriod?: InputMaybe<Scalars['Int']>;
  ParentId?: InputMaybe<Scalars['ID']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  RecurringScheduleId?: InputMaybe<Scalars['ID']>;
  RegionId: Scalars['ID'];
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']>;
  TotalAuthorizedServiceHours?: InputMaybe<Scalars['BigDecimal']>;
  Type?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
  Urgency?: InputMaybe<Scalars['String']>;
  VirtualMeetingId?: InputMaybe<Scalars['String']>;
  VirtualMeetingInfo?: InputMaybe<Scalars['String']>;
  VirtualMeetingURL?: InputMaybe<Scalars['String']>;
};

export type UpsertLocationResourceScores = {
  Blacklisted?: InputMaybe<Scalars['Boolean']>;
  LocationId: Scalars['ID'];
  ResourceId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  Whitelisted?: InputMaybe<Scalars['Boolean']>;
};

export type UpsertLocations = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Address?: InputMaybe<Scalars['String']>;
  Default?: InputMaybe<Scalars['Boolean']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  Name: Scalars['String'];
  RegionId?: InputMaybe<Scalars['ID']>;
  RequiresWhitelist?: InputMaybe<Scalars['Boolean']>;
  Type?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertLogger = {
  Message?: InputMaybe<Scalars['String']>;
  Type?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertProducts = {
  Description?: InputMaybe<Scalars['String']>;
  Family?: InputMaybe<Scalars['String']>;
  IsActive?: InputMaybe<Scalars['Boolean']>;
  Name: Scalars['String'];
  ProductCode?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertRecurringSchedules = {
  AckAllJobs?: InputMaybe<Scalars['Boolean']>;
  Description?: InputMaybe<Scalars['String']>;
  Pattern?: InputMaybe<Scalars['String']>;
  Summary?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertRegions = {
  CountryCode?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  Name: Scalars['String'];
  Radius?: InputMaybe<Scalars['Int']>;
  Timezone: Scalars['String'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertResourceJobOffers = {
  JobOfferId: Scalars['ID'];
  ResourceId: Scalars['ID'];
  Response?: InputMaybe<Scalars['OfferResponse']>;
  Status?: InputMaybe<Scalars['ResourceOfferStatus']>;
  TimeNotified?: InputMaybe<Scalars['Instant']>;
  TimeResponded?: InputMaybe<Scalars['Instant']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertResourceOverrideRegions = {
  RegionId: Scalars['ID'];
  ResourceOverrideId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertResourceOverrides = {
  Description?: InputMaybe<Scalars['String']>;
  End: Scalars['Instant'];
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  HomeAddress?: InputMaybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  Start: Scalars['Instant'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertResourceRegions = {
  End?: InputMaybe<Scalars['Instant']>;
  RegionId: Scalars['ID'];
  ResourceId: Scalars['ID'];
  Start?: InputMaybe<Scalars['Instant']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertResourceRequirementTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  ResourceRequirementId: Scalars['ID'];
  TagId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpsertResourceRequirements = {
  Description?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  JobId: Scalars['ID'];
  Quantity: Scalars['Int'];
  RelativeStart?: InputMaybe<Scalars['Duration']>;
  ScheduledEnd?: InputMaybe<Scalars['Instant']>;
  ScheduledStart?: InputMaybe<Scalars['Instant']>;
  Status?: InputMaybe<Scalars['JobStatus']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertResourceShiftBreaks = {
  End?: InputMaybe<Scalars['Instant']>;
  ResourceShiftId: Scalars['ID'];
  Start: Scalars['Instant'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertResourceShiftOffers = {
  ResourceId: Scalars['ID'];
  Response?: InputMaybe<Scalars['OfferResponse']>;
  ShiftOfferId: Scalars['ID'];
  Status?: InputMaybe<Scalars['ResourceOfferStatus']>;
  TimeNotified?: InputMaybe<Scalars['Instant']>;
  TimeResponded?: InputMaybe<Scalars['Instant']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertResourceShifts = {
  ActualEnd?: InputMaybe<Scalars['Instant']>;
  ActualStart?: InputMaybe<Scalars['Instant']>;
  ResourceId: Scalars['ID'];
  ShiftId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertResourceTags = {
  ExpiryDate?: InputMaybe<Scalars['Instant']>;
  ResourceId: Scalars['ID'];
  TagId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertResources = {
  Alias?: InputMaybe<Scalars['String']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']>;
  CareConnectUserID?: InputMaybe<Scalars['BigDecimal']>;
  Category?: InputMaybe<Scalars['String']>;
  CountryCode?: InputMaybe<Scalars['String']>;
  EffectiveTerminationDate?: InputMaybe<Scalars['Instant']>;
  Email?: InputMaybe<Scalars['String']>;
  EmploymentType?: InputMaybe<Scalars['String']>;
  FSM?: InputMaybe<Scalars['String']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  HomeAddress?: InputMaybe<Scalars['String']>;
  IsActive?: InputMaybe<Scalars['Boolean']>;
  MobilePhone?: InputMaybe<Scalars['String']>;
  Name: Scalars['String'];
  Notes?: InputMaybe<Scalars['String']>;
  NotificationType?: InputMaybe<Scalars['String']>;
  PrimaryPhone?: InputMaybe<Scalars['String']>;
  PrimaryRegionId: Scalars['ID'];
  Rating?: InputMaybe<Scalars['Int']>;
  ReportsTo?: InputMaybe<Scalars['String']>;
  RequestedWorkingHoursPerWeek?: InputMaybe<Scalars['BigDecimal']>;
  ResourceType?: InputMaybe<Scalars['String']>;
  TotalUtilizedHours?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
  UserId?: InputMaybe<Scalars['ID']>;
  WeeklyHours?: InputMaybe<Scalars['BigDecimal']>;
  WorkingHourType?: InputMaybe<Scalars['WorkingHourType']>;
  amsuserstatus?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  complianceissue?: InputMaybe<Scalars['String']>;
  degreetypelab?: InputMaybe<Scalars['String']>;
  estimatedactivationtimestamp?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  homephone?: InputMaybe<Scalars['String']>;
  middleInitial?: InputMaybe<Scalars['String']>;
  npi?: InputMaybe<Scalars['String']>;
  onboardingstatuslabel?: InputMaybe<Scalars['String']>;
  personalemail?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  uniqueeid?: InputMaybe<Scalars['String']>;
  worksfor?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type UpsertScheduleTemplates = {
  DeletedById?: InputMaybe<Scalars['ID']>;
  DeletedDate?: InputMaybe<Scalars['Instant']>;
  Description?: InputMaybe<Scalars['String']>;
  IsDeleted?: InputMaybe<Scalars['Boolean']>;
  Name: Scalars['String'];
  PeriodDays?: InputMaybe<Scalars['Int']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertShiftOfferShifts = {
  ShiftId: Scalars['ID'];
  ShiftOfferId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertShiftOffers = {
  Status?: InputMaybe<Scalars['OfferStatus']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertShiftTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  ShiftId: Scalars['ID'];
  TagId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpsertShifts = {
  CopiedFromId?: InputMaybe<Scalars['ID']>;
  DisplayName?: InputMaybe<Scalars['String']>;
  Duration?: InputMaybe<Scalars['Duration']>;
  End?: InputMaybe<Scalars['Instant']>;
  IsDraft?: InputMaybe<Scalars['Boolean']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  RegionId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']>;
  Start?: InputMaybe<Scalars['Instant']>;
  TemplatedShiftId?: InputMaybe<Scalars['ID']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertStarterTest = {
  ResourceId: Scalars['ID'];
  StarterTestBooleanField?: InputMaybe<Scalars['Boolean']>;
  StarterTestDecimalField?: InputMaybe<Scalars['BigDecimal']>;
  StarterTestPicklistField?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTagManagerSettings = {
  ExpiredReminder?: InputMaybe<Scalars['Boolean']>;
  ExpiredReminderTemplate?: InputMaybe<Scalars['String']>;
  ExpiringSoonReminderDays?: InputMaybe<Scalars['BigDecimal']>;
  ExpiringSoonReminderEnabled?: InputMaybe<Scalars['Boolean']>;
  ExpiringSoonReminderTemplate?: InputMaybe<Scalars['String']>;
  LongLiveToken?: InputMaybe<Scalars['String']>;
  NotifyExpiringTagOffset1?: InputMaybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset2?: InputMaybe<Scalars['BigDecimal']>;
  NotifyExpiringTagOffset3?: InputMaybe<Scalars['BigDecimal']>;
  ReminderSendTime?: InputMaybe<Scalars['BigDecimal']>;
  ReminderTimezone?: InputMaybe<Scalars['String']>;
  RemindersEnabled?: InputMaybe<Scalars['Boolean']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTagRequest = {
  IsRenewal?: InputMaybe<Scalars['Boolean']>;
  NewExpiryDate?: InputMaybe<Scalars['LocalDate']>;
  OldExpiryDate?: InputMaybe<Scalars['LocalDate']>;
  ResourceId: Scalars['ID'];
  Status?: InputMaybe<Scalars['String']>;
  TagAssignmentId?: InputMaybe<Scalars['ID']>;
  TagId?: InputMaybe<Scalars['ID']>;
  TagName?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTags = {
  Classification?: InputMaybe<Scalars['TagClassification']>;
  Groups?: InputMaybe<Array<Scalars['String']>>;
  IsRequestable?: InputMaybe<Scalars['Boolean']>;
  Name: Scalars['String'];
  NotVisibleToResources?: InputMaybe<Scalars['Boolean']>;
  RequestEvidence?: InputMaybe<Scalars['Boolean']>;
  RequiresExpiryDate?: InputMaybe<Scalars['Boolean']>;
  Type?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedActivities = {
  Address?: InputMaybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Notes?: InputMaybe<Scalars['String']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  ResourceId?: InputMaybe<Scalars['ID']>;
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  Timezone: Scalars['String'];
  Type?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedActivityResources = {
  ResourceId: Scalars['ID'];
  TemplatedActivityId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedAttendees = {
  ContactId: Scalars['ID'];
  TemplatedJobId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedJobAllocations = {
  Duration?: InputMaybe<Scalars['Duration']>;
  NotificationType?: InputMaybe<Scalars['String']>;
  ResourceId: Scalars['ID'];
  StartOffsetDays?: InputMaybe<Scalars['Int']>;
  StartTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  Status?: InputMaybe<Scalars['JobAllocationStatus']>;
  TeamLeader?: InputMaybe<Scalars['Boolean']>;
  TemplatedJobId: Scalars['ID'];
  TemplatedResourceRequirementId?: InputMaybe<Scalars['ID']>;
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedJobDependencies = {
  FromAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  FromTemplatedJobId: Scalars['ID'];
  ToAnchor?: InputMaybe<Scalars['JobDependencyAnchor']>;
  ToAnchorMaxOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToAnchorMinOffsetMinutes?: InputMaybe<Scalars['Int']>;
  ToTemplatedJobId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedJobProducts = {
  ProductId?: InputMaybe<Scalars['ID']>;
  Qty: Scalars['BigDecimal'];
  TemplatedJobId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedJobTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  TemplatedJobId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpsertTemplatedJobTasks = {
  Completed?: InputMaybe<Scalars['Boolean']>;
  Description?: InputMaybe<Scalars['String']>;
  Name: Scalars['String'];
  Seq: Scalars['Int'];
  TemplatedJobId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedJobTimeConstraints = {
  EndBeforeOffsetDays?: InputMaybe<Scalars['Int']>;
  EndBeforeTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  Required?: InputMaybe<Scalars['Boolean']>;
  StartAfterOffsetDays?: InputMaybe<Scalars['Int']>;
  StartAfterTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  StartBeforeOffsetDays?: InputMaybe<Scalars['Int']>;
  StartBeforeTimeOfDay?: InputMaybe<Scalars['LocalTime']>;
  TemplatedJobId: Scalars['ID'];
  Type: Scalars['JobTimeConstraintType'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedJobs = {
  AccountId?: InputMaybe<Scalars['ID']>;
  Address?: InputMaybe<Scalars['String']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']>;
  CanBeDeclined?: InputMaybe<Scalars['Boolean']>;
  ContactId?: InputMaybe<Scalars['ID']>;
  CustomerConfirmationStatus?: InputMaybe<Scalars['CustomerConfirmationStatus']>;
  Description?: InputMaybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']>;
  IsGroupEvent?: InputMaybe<Scalars['Boolean']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Locked?: InputMaybe<Scalars['Boolean']>;
  MaxAttendees?: InputMaybe<Scalars['Int']>;
  MinAttendees?: InputMaybe<Scalars['Int']>;
  NotesComments?: InputMaybe<Scalars['String']>;
  NotifyPeriod?: InputMaybe<Scalars['Int']>;
  Quantity?: InputMaybe<Scalars['Int']>;
  RegionId: Scalars['ID'];
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  Type?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
  Urgency?: InputMaybe<Scalars['String']>;
  VirtualMeetingId?: InputMaybe<Scalars['String']>;
  VirtualMeetingInfo?: InputMaybe<Scalars['String']>;
  VirtualMeetingURL?: InputMaybe<Scalars['String']>;
};

export type UpsertTemplatedResourceRequirementTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  TemplatedResourceRequirementId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpsertTemplatedResourceRequirements = {
  Description?: InputMaybe<Scalars['String']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']>;
  Quantity: Scalars['Int'];
  RelativeStart?: InputMaybe<Scalars['Duration']>;
  TemplatedJobId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedResourceShifts = {
  ResourceId: Scalars['ID'];
  TemplatedShiftId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertTemplatedShiftTags = {
  Required?: InputMaybe<Scalars['Boolean']>;
  TagId: Scalars['ID'];
  TemplatedShiftId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  Weighting?: InputMaybe<Scalars['Int']>;
};

export type UpsertTemplatedShifts = {
  DisplayName?: InputMaybe<Scalars['String']>;
  Duration: Scalars['Duration'];
  IsDraft?: InputMaybe<Scalars['Boolean']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  RegionId: Scalars['ID'];
  ScheduleTemplateId: Scalars['ID'];
  StartOffsetDays: Scalars['Int'];
  StartTimeOfDay: Scalars['LocalTime'];
  UID?: InputMaybe<Scalars['ID']>;
};

export type UpsertUserRegions = {
  RegionId: Scalars['ID'];
  UID?: InputMaybe<Scalars['ID']>;
  UserId: Scalars['ID'];
};

export type UpsertUser_Ext = {
  CareConnectUserID?: InputMaybe<Scalars['String']>;
  UID?: InputMaybe<Scalars['ID']>;
  uniqueeid?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type UpsertclientAvailabilityTemplateEntry = {
  AllDay?: InputMaybe<Scalars['Boolean']>;
  ClientAvailabilityTemplateId?: InputMaybe<Scalars['ID']>;
  EndTime?: InputMaybe<Scalars['LocalTime']>;
  LocationId?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
  StartTime?: InputMaybe<Scalars['LocalTime']>;
  UID?: InputMaybe<Scalars['ID']>;
  Weekday?: InputMaybe<Scalars['String']>;
};

export type Upsertsked_BroadcastRecipients = {
  UID?: InputMaybe<Scalars['ID']>;
  sked_BroadcastId: Scalars['ID'];
  sked_ContactId?: InputMaybe<Scalars['ID']>;
  sked_Date?: InputMaybe<Scalars['LocalDate']>;
  sked_ErrorInformation?: InputMaybe<Scalars['String']>;
  sked_NotificationMethod?: InputMaybe<Scalars['String']>;
  sked_Phone?: InputMaybe<Scalars['String']>;
  sked_ResourceId?: InputMaybe<Scalars['ID']>;
  sked_Status?: InputMaybe<Scalars['String']>;
  sked_Timestamp?: InputMaybe<Scalars['String']>;
};

export type Upsertsked_Broadcasts = {
  UID?: InputMaybe<Scalars['ID']>;
  sked_Broadcast?: InputMaybe<Scalars['String']>;
  sked_Date?: InputMaybe<Scalars['LocalDate']>;
  sked_NotSent?: InputMaybe<Scalars['BigDecimal']>;
  sked_NotificationMethod?: InputMaybe<Scalars['String']>;
  sked_RecipientType?: InputMaybe<Scalars['String']>;
  sked_Sent?: InputMaybe<Scalars['BigDecimal']>;
  sked_Timestamp?: InputMaybe<Scalars['String']>;
  sked_TotalRecipients?: InputMaybe<Scalars['BigDecimal']>;
};

export type UserRegions = {
  __typename?: 'UserRegions';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Region: Regions;
  RegionId: Scalars['ID'];
  UID: Scalars['ID'];
  User: Users;
  UserId: Scalars['ID'];
};

export type UserRegionsConnection = {
  __typename?: 'UserRegionsConnection';
  edges: Array<UserRegionsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserRegionsEdge = {
  __typename?: 'UserRegionsEdge';
  cursor: Scalars['Base64'];
  node: UserRegions;
  offset: Scalars['Int'];
};

export type User_Ext = {
  __typename?: 'User_Ext';
  CareConnectUserID?: Maybe<Scalars['String']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  UID: Scalars['ID'];
  uniqueeid?: Maybe<Scalars['String']>;
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['ID']>;
};

export type User_ExtConnection = {
  __typename?: 'User_ExtConnection';
  edges: Array<User_ExtEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type User_ExtEdge = {
  __typename?: 'User_ExtEdge';
  cursor: Scalars['Base64'];
  node: User_Ext;
  offset: Scalars['Int'];
};

export type Users = {
  __typename?: 'Users';
  City?: Maybe<Scalars['String']>;
  Country?: Maybe<Scalars['String']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  Email: Scalars['String'];
  FirstName?: Maybe<Scalars['String']>;
  FullPhotoUrl: Scalars['String'];
  IsActive: Scalars['Boolean'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  LastName: Scalars['String'];
  MobilePhone?: Maybe<Scalars['String']>;
  Name: Scalars['String'];
  PostalCode?: Maybe<Scalars['String']>;
  Resources: Array<Resources>;
  SmallPhotoUrl: Scalars['String'];
  State?: Maybe<Scalars['String']>;
  Street?: Maybe<Scalars['String']>;
  UID: Scalars['ID'];
  UserRegions: Array<UserRegions>;
  UserTypes?: Maybe<Array<Scalars['String']>>;
  user: Array<User_Ext>;
};


export type UsersResourcesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResources']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResources']>;
};


export type UsersUserRegionsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterUserRegions']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseUserRegions']>;
};


export type UsersUserArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterUser_Ext']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseUser_Ext']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UsersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UsersEdge = {
  __typename?: 'UsersEdge';
  cursor: Scalars['Base64'];
  node: Users;
  offset: Scalars['Int'];
};

export type ClientAvailabilityTemplateEntry = {
  __typename?: 'clientAvailabilityTemplateEntry';
  AllDay: Scalars['Boolean'];
  ClientAvailabilityTemplate?: Maybe<ClientAvailabilityTemplate>;
  ClientAvailabilityTemplateId?: Maybe<Scalars['ID']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  EndTime?: Maybe<Scalars['LocalTime']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  Location?: Maybe<Locations>;
  LocationId?: Maybe<Scalars['ID']>;
  Name?: Maybe<Scalars['String']>;
  StartTime?: Maybe<Scalars['LocalTime']>;
  UID: Scalars['ID'];
  Weekday?: Maybe<Scalars['String']>;
};

export type ClientAvailabilityTemplateEntryConnection = {
  __typename?: 'clientAvailabilityTemplateEntryConnection';
  edges: Array<ClientAvailabilityTemplateEntryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ClientAvailabilityTemplateEntryEdge = {
  __typename?: 'clientAvailabilityTemplateEntryEdge';
  cursor: Scalars['Base64'];
  node: ClientAvailabilityTemplateEntry;
  offset: Scalars['Int'];
};

export type Sked_BroadcastRecipients = {
  __typename?: 'sked_BroadcastRecipients';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  UID: Scalars['ID'];
  sked_Broadcast: Sked_Broadcasts;
  sked_BroadcastId: Scalars['ID'];
  sked_Contact?: Maybe<Contacts>;
  sked_ContactId?: Maybe<Scalars['ID']>;
  sked_Date?: Maybe<Scalars['LocalDate']>;
  sked_ErrorInformation?: Maybe<Scalars['String']>;
  sked_NotificationMethod?: Maybe<Scalars['String']>;
  sked_Phone?: Maybe<Scalars['String']>;
  sked_Resource?: Maybe<Resources>;
  sked_ResourceId?: Maybe<Scalars['ID']>;
  sked_Status?: Maybe<Scalars['String']>;
  sked_Timestamp?: Maybe<Scalars['String']>;
};

export type Sked_BroadcastRecipientsConnection = {
  __typename?: 'sked_BroadcastRecipientsConnection';
  edges: Array<Sked_BroadcastRecipientsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Sked_BroadcastRecipientsEdge = {
  __typename?: 'sked_BroadcastRecipientsEdge';
  cursor: Scalars['Base64'];
  node: Sked_BroadcastRecipients;
  offset: Scalars['Int'];
};

export type Sked_Broadcasts = {
  __typename?: 'sked_Broadcasts';
  CreatedBy: Users;
  CreatedById: Scalars['ID'];
  CreatedDate: Scalars['Instant'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID'];
  LastModifiedDate: Scalars['Instant'];
  UID: Scalars['ID'];
  sked_Broadcast?: Maybe<Scalars['String']>;
  sked_Date?: Maybe<Scalars['LocalDate']>;
  sked_NotSent?: Maybe<Scalars['BigDecimal']>;
  sked_NotificationMethod?: Maybe<Scalars['String']>;
  sked_RecipientType?: Maybe<Scalars['String']>;
  sked_Sent?: Maybe<Scalars['BigDecimal']>;
  sked_Timestamp?: Maybe<Scalars['String']>;
  sked_TotalRecipients?: Maybe<Scalars['BigDecimal']>;
};

export type Sked_BroadcastsConnection = {
  __typename?: 'sked_BroadcastsConnection';
  edges: Array<Sked_BroadcastsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Sked_BroadcastsEdge = {
  __typename?: 'sked_BroadcastsEdge';
  cursor: Scalars['Base64'];
  node: Sked_Broadcasts;
  offset: Scalars['Int'];
};

export type FetchJobsQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']>;
}>;


export type FetchJobsQuery = { __typename?: 'Query', jobs: { __typename?: 'JobsConnection', edges: Array<{ __typename?: 'JobsEdge', node: { __typename?: 'Jobs', UID: string, Name: string } }> } };


export const FetchJobsDocument = gql`
    query fetchJobs($filter: EQLQueryFilterJobs) {
  jobs(filter: $filter, orderBy: "CreatedDate DESC") {
    edges {
      node {
        UID
        Name
      }
    }
  }
}
    `;

/**
 * __useFetchJobsQuery__
 *
 * To run a query within a React component, call `useFetchJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchJobsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useFetchJobsQuery(baseOptions?: Apollo.QueryHookOptions<FetchJobsQuery, FetchJobsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchJobsQuery, FetchJobsQueryVariables>(FetchJobsDocument, options);
      }
export function useFetchJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchJobsQuery, FetchJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchJobsQuery, FetchJobsQueryVariables>(FetchJobsDocument, options);
        }
export type FetchJobsQueryHookResult = ReturnType<typeof useFetchJobsQuery>;
export type FetchJobsLazyQueryHookResult = ReturnType<typeof useFetchJobsLazyQuery>;
export type FetchJobsQueryResult = Apollo.QueryResult<FetchJobsQuery, FetchJobsQueryVariables>;