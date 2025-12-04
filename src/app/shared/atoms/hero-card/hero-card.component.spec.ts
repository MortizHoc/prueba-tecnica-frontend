import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroCardComponent } from './hero-card.component';
import { Hero } from '../../../features/heroes/domain/models/hero.model';

describe('HeroCardComponent', () => {
  let component: HeroCardComponent;
  let fixture: ComponentFixture<HeroCardComponent>;

  const mockHero: Hero = {
    id: 1,
    name: 'Test Hero',
    slug: 'test-hero',
    powerstats: {
      intelligence: 80,
      strength: 70,
      speed: 60,
      durability: 75,
      power: 65,
      combat: 85
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ['180', 'cm'],
      weight: ['80', 'kg'],
      eyeColor: 'Blue',
      hairColor: 'Black'
    },
    biography: {
      fullName: 'Test Hero Full Name',
      alterEgos: 'No alter egos',
      aliases: ['Test'],
      placeOfBirth: 'Test City',
      firstAppearance: 'Test Comic #1',
      publisher: 'Test Publisher',
      alignment: 'good'
    },
    work: {
      occupation: 'Hero',
      base: 'Test Base'
    },
    connections: {
      groupAffiliation: 'Test Group',
      relatives: 'None'
    },
    images: {
      xs: 'test-xs.jpg',
      sm: 'test-sm.jpg',
      md: 'test-md.jpg',
      lg: 'test-lg.jpg'
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroCardComponent);
    component = fixture.componentInstance;
    component.hero = mockHero;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display hero name', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.hero-card-title').textContent).toContain('Test Hero Full Name');
  });

  it('should get hero image correctly', () => {
    expect(component.getHeroImage()).toBe('test-md.jpg');
  });
});

