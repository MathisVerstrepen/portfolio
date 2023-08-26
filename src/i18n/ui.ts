import { home_fr } from "./lang/fr/home";
import { home_en } from "./lang/en/home";

import { about_en, more_en } from "./lang/en/about";
import { about_fr, more_fr } from "./lang/fr/about";

import { formation_academic_en, formation_lang_en } from "./lang/en/formation";
import { formation_academic_fr, formation_lang_fr } from "./lang/fr/formation";

import { tech_en, tech_web_en, tech_database_en, tech_devops_en, tech_general_en, tech_other_en } from "./lang/en/tech_stack";
import { tech_fr, tech_web_fr, tech_database_fr, tech_devops_fr, tech_general_fr, tech_other_fr } from "./lang/fr/tech_stack";

import { experience_en } from "./lang/en/experience";
import { experience_fr } from "./lang/fr/experience";

import { projects_perso_en, school_projects_en } from "./lang/en/projects";
import { projects_perso_fr, school_projects_fr } from "./lang/fr/projects";

export const languages = {
  en: "English",
  fr: "Français",
};

export const defaultLang = "en";

export const ui = {
  en: {
    ...home_en,

    ...about_en,
    ...more_en,

    ...formation_academic_en,
    ...formation_lang_en,

    ...tech_en,
    ...tech_web_en,
    ...tech_database_en,
    ...tech_devops_en,
    ...tech_general_en,
    ...tech_other_en,

    ...experience_en,

    ...projects_perso_en,
    ...school_projects_en,
  },
  fr: {
    ...home_fr,

    ...about_fr,
    ...more_fr,

    ...formation_academic_fr,
    ...formation_lang_fr,

    ...tech_fr,
    ...tech_web_fr,
    ...tech_database_fr,
    ...tech_devops_fr,
    ...tech_general_fr,
    ...tech_other_fr,

    ...experience_fr,

    ...projects_perso_fr,
    ...school_projects_fr,
  },
} as const;
