const e = {
  en: {
    unexpected_error: "unexpected error",
    unknown_error: "unknown error",
    issue: "issue",
    issue_one: "issue",
    issue_other: "issues",
    cannot_connect: "cannot connect to server",
    error_occurred: "an error occurred",
    issues_found: "issues found",
    part_issue: "part issue",
    stock_issue: "stock issue",
    no_saw: "no saw selected",
    thickness_required_for_beam_saw: "thickness is required for beam saw",
    no_blade_width: "no blade width set",
    saw_selected_no_blade_width: "you have selected a saw, but it does not have a blade width set",
    no_parts: "no parts found",
    no_parts_list: "no parts in list",
    no_parts_added: "no parts were added - please double check your list.",
    parts_not_fit: "the following part did not fit",
    parts_not_fit_one: "the following part did not fit",
    parts_not_fit_other: "the following parts did not fit",
    no_stock: "no stock found",
    max_parts: "the maximum number of parts is",
    no_valid_parts: "no valid parts found",
    unable_to_match_parts: "unable to match part to stock",
    unable_to_match_parts_one: "unable to match part to stock",
    unable_to_match_parts_other: "unable to match parts to stock",
    no_matching_stock_material: "no matching stock material found",
    no_matching_stock_thickness: "no matching stock thickness found",
    no_matching_stock_material_thickness: "no stock with matching material & thickness found",
    no_matching_stock_width: "no matching stock width found",
    will_not_fit: "will not fit on any stock",
    reason_for_mismatch: "due to a thickness, material or dimensions mismatch",
    max_projects: "the maximum number of projects is {{x}}",
    server_offline: "server is offline",
    inputs_issue: "issue with your {{x}} inputs",
    no_result: "no result found",
    check_inputs: "please check your inputs",
    too_much_trim: "trimming {{x}} by {{y}} resulted in {{z}}",
    must_be_string_number_boolean: "{{x}} must be a string, number or boolean",
    must_be_values: "{{x}} must be one of the following values: {{y}}",
    must_be_object: "{{x}} must be an object",
    not_understood: "{{x}} is not understood, got {{y}}",
    not_set: "{{x}} is not set",
    greater_than: "{{x}} should be greater than {{y}}",
    greater_than_or_equal: "{{x}} should be greater than or equal {{y}}",
    less_than: "{{x}} should be less than {{y}}",
    less_than_or_equal: "{{x}} should be less than or equal {{y}}",
    exceeded_limit: "The {{type}} count of {{x}} exceeds you {{type}} limit of {{y}}",
    option_not_available: "Option {{x}} in {{y}} is no longer available",
    saw: {
      validation: {
        stockType: {
          invalid: "Saw stock type: {{stockType}} not valid"
        },
        cutType: {
          invalid: "Saw cut type: {{cutType}} not valid for stock type: {{stockType}}"
        },
        cutPreference: {
          invalid: "Saw cut preference: {{preference}} not valid for cut type: {{cutType}} and stock type: {{stockType}}"
        },
        bladeWidth: {
          invalid: "Saw blade width: {{width}} is not valid"
        },
        required: {
          stackHeight: "{{cutType}} saws require stack height to be set"
        }
      }
    },
    fieldValidation: {
      valid: "Valid",
      zero_not_allowed: "0 is not allowed",
      field_required: "Required",
      invalid_number: "Invalid decimal number",
      invalid_format: "Invalid format",
      invalid_fraction: "Invalid fraction",
      invalid_fraction_chars: "Invalid characters in fraction",
      no_material: "No material selected",
      no_thickness: "No thickness selected",
      invalid_thickness: "Invalid thickness"
    }
  },
  ca: {
    issue: "tema",
    issue_one: "tema",
    issue_other: "temes",
    cannot_connect: "no es pot connectar al servidor",
    error_occurred: "s'ha produït un error",
    issues_found: "problemes trobats",
    part_issue: "problema amb la peça",
    stock_issue: "problema d'estoc",
    no_saw: "no s'ha seleccionat serra",
    thickness_required_for_beam_saw: "es requereix gruix per serra de biga",
    no_blade_width: "no s'ha establert l'amplada de la fulla",
    saw_selected_no_blade_width: "has seleccionat una serra, però no té establerta l'amplada de la fulla",
    no_parts: "sense peces",
    no_parts_list: "no hi ha peces a la llista",
    no_parts_added: "no s'han afegit peces - si us plau, revisa la teva llista",
    parts_not_fit: "les peces següents no encaixaven",
    parts_not_fit_one: "la següent peça no encaixava",
    parts_not_fit_other: "les següents peces no encaixaven",
    no_stock: "sense estoc",
    max_parts: "el número màxim de peces és",
    no_valid_parts: "no s'han trobat peces vàlides",
    unable_to_match_parts: "no es pot fer coincidir la peça amb l'estoc",
    unable_to_match_parts_one: "no es pot fer coincidir la peça amb l'estoc",
    unable_to_match_parts_other: "no es poden fer coincidir les peces amb l'estoc",
    no_matching_stock_material: "no s'ha trobat material d'estoc coincident",
    no_matching_stock_thickness: "no s'ha trobat gruix d'estoc coincident",
    no_matching_stock_material_thickness: "no s'ha trobat estoc amb el material i gruix coincidents",
    no_matching_stock_width: "no s'ha trobat amplada d'estoc coincident",
    will_not_fit: "no cabrà en cap estoc",
    reason_for_mismatch: "a causa d'una discrepància de gruix, material o dimensions",
    max_projects: "el número màxim de projectes és {{x}}",
    server_offline: "el servidor està fora de línia",
    inputs_issue: "problema amb les entrades de {{x}}",
    no_result: "no s'ha trobat resultat",
    check_inputs: "si us plau, comproveu les entrades",
    too_much_trim: "retallar {{x}} per {{y}} ha resultat en {{z}}",
    must_be_string_number_boolean: "{{x}} ha de ser una cadena, número o booleà",
    must_be_values: "{{x}} ha de ser un dels següents valors: {{y}}",
    must_be_object: "{{x}} ha de ser un objecte",
    not_understood: "{{x}} no s'entén, s'ha obtingut {{y}}",
    not_set: "{{x}} no està establert",
    greater_than: "{{x}} hauria de ser més gran que {{y}}",
    greater_than_or_equal: "{{x}} hauria de ser més gran o igual que {{y}}",
    less_than: "{{x}} hauria de ser menor que {{y}}",
    less_than_or_equal: "{{x}} hauria de ser menor o igual que {{y}}",
    option_not_available: "L'opció {{x}} a {{y}} ja no està disponible",
    saw: {
      validation: {
        stockType: {
          invalid: "Tipus de material de serra: {{stockType}} no vàlid"
        },
        cutType: {
          invalid: "Tipus de tall de serra: {{cutType}} no vàlid per al tipus de material: {{stockType}}"
        },
        cutPreference: {
          invalid: "Preferència de tall de serra: {{preference}} no vàlida per al tipus de tall: {{cutType}} i tipus de material: {{stockType}}"
        },
        bladeWidth: {
          invalid: "Amplada de la fulla de serra: {{width}} no és vàlida"
        },
        required: {
          stackHeight: "Les serres {{cutType}} requereixen establir una alçada de pila"
        }
      }
    },
    fieldValidation: {
      valid: "Vàlid",
      zero_not_allowed: "0 no està permès",
      field_required: "Obligatori",
      invalid_number: "Número decimal no vàlid",
      invalid_format: "Format no vàlid",
      invalid_fraction: "Fracció no vàlida",
      invalid_fraction_chars: "Caràcters no vàlids a la fracció",
      no_material: "No s'ha seleccionat material",
      no_thickness: "No s'ha seleccionat gruix",
      invalid_thickness: "Gruix no vàlid"
    }
  },
  es: {
    issue: "tema",
    issue_one: "tema",
    issue_other: "temas",
    cannot_connect: "no se puede conectar al servidor",
    error_occurred: "ha ocurrido un error",
    issues_found: "problemas encontrados",
    part_issue: "problema con la pieza",
    stock_issue: "problema de stock",
    no_saw: "no hay sierra seleccionada",
    thickness_required_for_beam_saw: "se requiere espesor para sierra de viga",
    no_blade_width: "no se ha establecido el ancho de la hoja",
    saw_selected_no_blade_width: "has seleccionado una sierra, pero no tiene establecido el ancho de la hoja",
    no_parts: "sin piezas",
    no_parts_list: "no hay piezas en la lista",
    no_parts_added: "no se han añadido piezas - por favor revisa tu lista",
    parts_not_fit: "las siguientes piezas no encajaban",
    parts_not_fit_one: "la siguiente pieza no encajaba",
    parts_not_fit_other: "las siguientes piezas no encajaban",
    no_stock: "sin stock",
    max_parts: "el número máximo de piezas es",
    no_valid_parts: "no se encontraron piezas válidas",
    unable_to_match_parts: "no se puede hacer coincidir la pieza con el stock",
    unable_to_match_parts_one: "no se puede hacer coincidir la pieza con el stock",
    unable_to_match_parts_other: "no se pueden hacer coincidir las piezas con el stock",
    no_matching_stock_material: "no se encontró material de stock coincidente",
    no_matching_stock_thickness: "no se encontró grosor de stock coincidente",
    no_matching_stock_material_thickness: "no se encontró stock con material y grosor coincidentes",
    no_matching_stock_width: "no se encontró ancho de stock coincidente",
    will_not_fit: "no cabrá en ningún stock",
    reason_for_mismatch: "debido a una discrepancia de grosor, material o dimensiones",
    max_projects: "el número máximo de proyectos es {{x}}",
    server_offline: "el servidor está fuera de línea",
    inputs_issue: "problema con las entradas de {{x}}",
    no_result: "no se encontró resultado",
    check_inputs: "por favor, revise los datos ingresados",
    too_much_trim: "recortar {{x}} por {{y}} resultó en {{z}}",
    must_be_string_number_boolean: "{{x}} debe ser una cadena, número o booleano",
    must_be_values: "{{x}} debe ser uno de los siguientes valores: {{y}}",
    must_be_object: "{{x}} debe ser un objeto",
    not_understood: "{{x}} no se entiende, se obtuvo {{y}}",
    not_set: "{{x}} no está establecido",
    greater_than: "{{x}} debería ser mayor que {{y}}",
    greater_than_or_equal: "{{x}} debería ser mayor o igual que {{y}}",
    less_than: "{{x}} debería ser menor que {{y}}",
    less_than_or_equal: "{{x}} debería ser menor o igual que {{y}}",
    option_not_available: "La opción {{x}} en {{y}} ya no está disponible",
    saw: {
      validation: {
        stockType: {
          invalid: "Tipo de material de sierra: {{stockType}} no válido"
        },
        cutType: {
          invalid: "Tipo de corte de sierra: {{cutType}} no válido para el tipo de material: {{stockType}}"
        },
        cutPreference: {
          invalid: "Preferencia de corte de sierra: {{preference}} no válida para el tipo de corte: {{cutType}} y tipo de material: {{stockType}}"
        },
        bladeWidth: {
          invalid: "Ancho de la hoja de sierra: {{width}} no es válido"
        },
        required: {
          stackHeight: "Las sierras {{cutType}} requieren establecer una altura de pila"
        }
      }
    },
    fieldValidation: {
      valid: "Válido",
      zero_not_allowed: "0 no está permitido",
      field_required: "Obligatorio",
      invalid_number: "Número decimal no válido",
      invalid_format: "Formato no válido",
      invalid_fraction: "Fracción no válida",
      invalid_fraction_chars: "Caracteres no válidos en la fracción",
      no_material: "No se ha seleccionado material",
      no_thickness: "No se ha seleccionado grosor",
      invalid_thickness: "Grosor no válido"
    }
  },
  fr: {
    issue: "erreur",
    issue_one: "erreur",
    issue_other: "erreurs",
    cannot_connect: "impossible de se connecter au serveur",
    error_occurred: "une erreur s'est produite",
    issues_found: "erreurs trouvées",
    part_issue: "pièce erreur",
    stock_issue: "problème de stock",
    no_saw: "aucune scie sélectionnée",
    thickness_required_for_beam_saw: "épaisseur requise pour scie à ruban",
    no_blade_width: "aucune largeur de lame définie",
    saw_selected_no_blade_width: "vous avez sélectionné une scie, mais elle n'a pas de largeur de lame définie",
    no_parts: "aucune pièce",
    no_parts_list: "aucune pièce dans la liste",
    no_parts_added: "aucune pièce n'a été ajoutée - veuillez vérifier votre liste.",
    parts_not_fit: "les pièces suivantes ne s'adaptent pas",
    parts_not_fit_one: "la pièce suivante ne s'adapte pas",
    parts_not_fit_other: "les pièces suivantes ne s'adaptent pas",
    no_stock: "aucun stock",
    max_parts: "le nombre maximum de pièces est",
    no_valid_parts: "aucune pièce valide trouvée",
    unable_to_match_parts: "impossible de faire correspondre la pièce au stock",
    unable_to_match_parts_one: "impossible de faire correspondre la pièce au stock",
    unable_to_match_parts_other: "impossible de faire correspondre les pièces au stock",
    no_matching_stock_material: "aucun matériau de stock correspondant trouvé",
    no_matching_stock_thickness: "aucune épaisseur de stock correspondante trouvée",
    no_matching_stock_material_thickness: "aucun stock avec matériau et épaisseur correspondants trouvé",
    no_matching_stock_width: "aucune largeur de stock correspondante trouvée",
    will_not_fit: "ne s'adaptera à aucun stock",
    reason_for_mismatch: "en raison d'une incompatibilité d'épaisseur, de matériau ou de dimensions",
    max_projects: "le nombre maximum de projets est {{x}}",
    server_offline: "le serveur est hors ligne",
    inputs_issue: "problème avec vos entrées {{x}}",
    no_result: "aucun résultat trouvé",
    check_inputs: "veuillez vérifier vos saisies",
    too_much_trim: "la coupe de {{x}} par {{y}} a donné {{z}}",
    must_be_string_number_boolean: "{{x}} doit être une chaîne, un nombre ou un booléen",
    must_be_values: "{{x}} doit être l'une des valeurs suivantes: {{y}}",
    must_be_object: "{{x}} doit être un objet",
    not_understood: "{{x}} n'est pas compris, obtenu {{y}}",
    not_set: "{{x}} n'est pas défini",
    greater_than: "{{x}} doit être supérieur à {{y}}",
    greater_than_or_equal: "{{x}} doit être supérieur ou égal à {{y}}",
    less_than: "{{x}} doit être inférieur à {{y}}",
    less_than_or_equal: "{{x}} doit être inférieur ou égal à {{y}}",
    option_not_available: "L'option {{x}} dans {{y}} n'est plus disponible",
    saw: {
      validation: {
        stockType: {
          invalid: "Type de matériau de scie : {{stockType}} non valide"
        },
        cutType: {
          invalid: "Type de coupe de scie : {{cutType}} non valide pour le type de matériau : {{stockType}}"
        },
        cutPreference: {
          invalid: "Préférence de coupe de scie : {{preference}} non valide pour le type de coupe : {{cutType}} et le type de matériau : {{stockType}}"
        },
        bladeWidth: {
          invalid: "Largeur de lame de scie : {{width}} non valide"
        },
        required: {
          stackHeight: "Les scies {{cutType}} nécessitent une hauteur de pile définie"
        }
      }
    },
    fieldValidation: {
      valid: "Valide",
      zero_not_allowed: "0 n'est pas autorisé",
      field_required: "Obligatoire",
      invalid_number: "Nombre décimal invalide",
      invalid_format: "Format invalide",
      invalid_fraction: "Fraction invalide",
      invalid_fraction_chars: "Caractères invalides dans la fraction",
      no_material: "Aucun matériau sélectionné",
      no_thickness: "Aucune épaisseur sélectionnée",
      invalid_thickness: "Épaisseur invalide"
    }
  },
  nl: {
    unexpected_error: "onverwachte fout",
    unknown_error: "onbekende fout",
    issue: "probleem",
    issue_one: "probleem",
    issue_other: "problemen",
    cannot_connect: "kan geen verbinding maken met server",
    error_occurred: "er is een fout opgetreden",
    issues_found: "problemen gevonden",
    part_issue: "onderdeel probleem",
    stock_issue: "voorraad probleem",
    no_saw: "geen zaag geselecteerd",
    thickness_required_for_beam_saw: "dikte is vereist voor balkzaag",
    no_blade_width: "geen zaagbladbreedte ingesteld",
    saw_selected_no_blade_width: "je hebt een zaag geselecteerd, maar er is geen zaagbladbreedte ingesteld",
    no_parts: "geen onderdelen gevonden",
    no_parts_list: "geen onderdelen in lijst",
    no_parts_added: "er zijn geen onderdelen toegevoegd - controleer je lijst.",
    parts_not_fit: "het volgende onderdeel paste niet",
    parts_not_fit_one: "het volgende onderdeel paste niet",
    parts_not_fit_other: "de volgende onderdelen pasten niet",
    no_stock: "geen voorraad gevonden",
    max_parts: "het maximale aantal onderdelen is",
    no_valid_parts: "geen geldige onderdelen gevonden",
    unable_to_match_parts: "kan onderdeel niet matchen met voorraad",
    unable_to_match_parts_one: "kan onderdeel niet matchen met voorraad",
    unable_to_match_parts_other: "kan onderdelen niet matchen met voorraad",
    no_matching_stock_material: "geen passend voorraadmateriaal gevonden",
    no_matching_stock_thickness: "geen passende voorraaddikte gevonden",
    no_matching_stock_material_thickness: "geen voorraad met passend materiaal & dikte gevonden",
    no_matching_stock_width: "geen passende voorraadbreedte gevonden",
    will_not_fit: "past op geen enkele voorraad",
    reason_for_mismatch: "vanwege een verschil in dikte, materiaal of afmetingen",
    max_projects: "het maximale aantal projecten is {{x}}",
    server_offline: "server is offline",
    inputs_issue: "probleem met je {{x}} invoer",
    no_result: "geen resultaat gevonden",
    check_inputs: "controleer je invoer",
    too_much_trim: "het trimmen van {{x}} met {{y}} resulteerde in {{z}}",
    must_be_string_number_boolean: "{{x}} moet een string, getal of boolean zijn",
    must_be_values: "{{x}} moet een van de volgende waarden zijn: {{y}}",
    must_be_object: "{{x}} moet een object zijn",
    not_understood: "{{x}} wordt niet begrepen, kreeg {{y}}",
    not_set: "{{x}} is niet ingesteld",
    greater_than: "{{x}} moet groter zijn dan {{y}}",
    greater_than_or_equal: "{{x}} moet groter zijn dan of gelijk aan {{y}}",
    less_than: "{{x}} moet kleiner zijn dan {{y}}",
    less_than_or_equal: "{{x}} moet kleiner zijn dan of gelijk aan {{y}}",
    exceeded_limit: "Het {{type}} aantal van {{x}} overschrijdt je {{type}} limiet van {{y}}",
    option_not_available: "Optie {{x}} in {{y}} is niet meer beschikbaar",
    saw: {
      validation: {
        stockType: {
          invalid: "Zaag voorraadtype: {{stockType}} niet geldig"
        },
        cutType: {
          invalid: "Zaag snijtype: {{cutType}} niet geldig voor voorraadtype: {{stockType}}"
        },
        cutPreference: {
          invalid: "Zaag snijvoorkeur: {{preference}} niet geldig voor snijtype: {{cutType}} en voorraadtype: {{stockType}}"
        },
        bladeWidth: {
          invalid: "Zaagbladbreedte: {{width}} is niet geldig"
        },
        required: {
          stackHeight: "{{cutType}} zagen vereisen dat de stapelhoogte wordt ingesteld"
        }
      }
    },
    fieldValidation: {
      valid: "Geldig",
      zero_not_allowed: "0 is niet toegestaan",
      field_required: "Verplicht",
      invalid_number: "Ongeldig decimaal getal",
      invalid_format: "Ongeldig formaat",
      invalid_fraction: "Ongeldige breuk",
      invalid_fraction_chars: "Ongeldige tekens in breuk",
      no_material: "Geen materiaal geselecteerd",
      no_thickness: "Geen dikte geselecteerd",
      invalid_thickness: "Ongeldige dikte"
    }
  }
};
export {
  e as resources
};
