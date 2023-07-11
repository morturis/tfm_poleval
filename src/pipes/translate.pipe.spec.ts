import { TestBed, async } from '@angular/core/testing';
import { TranslatePipe } from './translate.pipe';
import { TranslationService } from 'src/services/translation-service.service';
import { LanguageService } from 'src/services/language.service';

describe('TranslatePipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [TranslationService],
    }).compileComponents();
  });

  it('create an instance', () => {
    const pipe = new TranslatePipe(
      new TranslationService(new LanguageService())
    );
    expect(pipe).toBeTruthy();
  });
});
