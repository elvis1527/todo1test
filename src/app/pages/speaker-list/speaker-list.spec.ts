import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { ActionSheetController } from '@ionic/angular';

import { SpeakerListPage } from './speaker-list';
import { Todo1Data } from '../../providers/todo1-data';

const confDataSub = {};

describe('SpeakerListPage', () => {
  let fixture, app;
  beforeEach(waitForAsync(() => {
    const actionSheetSpy = jasmine.createSpyObj('ActionSheetController', [
      'create'
    ]);
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    const iabSpy = jasmine.createSpyObj('InAppBrowser', ['create']);

    TestBed.configureTestingModule({
      declarations: [SpeakerListPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ActionSheetController, useValue: actionSheetSpy },
        { provide: useValue: iabSpy },
        { provide: Router, useValue: routerSpy },
        { provide: Todo1Data, useValue: confDataSub }
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerListPage);
    app = fixture.debugElement.componentInstance;
  });
  it('should create the speaker list page', () => {
    expect(app).toBeTruthy();
  });
});
