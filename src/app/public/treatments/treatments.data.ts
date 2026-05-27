export interface Treatment {
  slug: string;
  name: string;
  category: 'facial-corporal' | 'depilacion' | 'manicura-pedicura';
  categoryLabel: string;
  categoryIcon: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  duration?: string;
  image: string;
}

export const TREATMENTS: Treatment[] = [
  // Facial y Corporal
  {
    slug: 'higiene-facial-completa',
    name: 'Higiene Facial Completa',
    category: 'facial-corporal',
    categoryLabel: 'Facial y Corporal',
    categoryIcon: 'ph ph-sparkle',
    shortDescription: 'Limpieza profunda del rostro para una piel radiante y saludable',
    fullDescription: '',
    price: '35 €',
    duration: '60 min',
    image: 'assets/images/treatments/facial-corporal.jpg'
  },
  {
    slug: 'maquillaje-profesional',
    name: 'Maquillaje Profesional',
    category: 'facial-corporal',
    categoryLabel: 'Facial y Corporal',
    categoryIcon: 'ph ph-sparkle',
    shortDescription: 'Maquillaje para eventos, bodas y ocasiones especiales',
    fullDescription: '',
    price: '35 €',
    duration: '45 min',
    image: 'assets/images/treatments/facial-corporal.jpg'
  },
  {
    slug: 'lifting-tinte-pestanas',
    name: 'Lifting y Tinte de Pestañas',
    category: 'facial-corporal',
    categoryLabel: 'Facial y Corporal',
    categoryIcon: 'ph ph-sparkle',
    shortDescription: 'Realza tus pestañas con un efecto natural de curvatura y color',
    fullDescription: '',
    price: '35 €',
    duration: '45 min',
    image: 'assets/images/treatments/facial-corporal.jpg'
  },
  {
    slug: 'peeling-corporal',
    name: 'Peeling Corporal',
    category: 'facial-corporal',
    categoryLabel: 'Facial y Corporal',
    categoryIcon: 'ph ph-sparkle',
    shortDescription: 'Exfoliación corporal para una piel suave y renovada',
    fullDescription: '',
    price: '40 €',
    duration: '40 min',
    image: 'assets/images/treatments/facial-corporal.jpg'
  },
  {
    slug: 'maderoterapia-reductora',
    name: 'Maderoterapia Reductora',
    category: 'facial-corporal',
    categoryLabel: 'Facial y Corporal',
    categoryIcon: 'ph ph-sparkle',
    shortDescription: 'Técnica reductora con instrumentos de madera para modelar tu figura',
    fullDescription: '',
    price: '45 €',
    duration: '50 min',
    image: 'assets/images/treatments/facial-corporal.jpg'
  },

  // Depilación
  {
    slug: 'depilacion-piernas-enteras',
    name: 'Piernas Enteras',
    category: 'depilacion',
    categoryLabel: 'Depilación',
    categoryIcon: 'ph ph-scissors',
    shortDescription: 'Depilación completa de piernas con cera tibia',
    fullDescription: '',
    price: '18 €',
    duration: '30 min',
    image: 'assets/images/treatments/depilacion.jpg'
  },
  {
    slug: 'depilacion-pubis-completo',
    name: 'Pubis Completo',
    category: 'depilacion',
    categoryLabel: 'Depilación',
    categoryIcon: 'ph ph-scissors',
    shortDescription: 'Depilación completa de la zona púbica',
    fullDescription: '',
    price: '12 €',
    duration: '15 min',
    image: 'assets/images/treatments/depilacion.jpg'
  },
  {
    slug: 'depilacion-labio-superior',
    name: 'Labio Superior',
    category: 'depilacion',
    categoryLabel: 'Depilación',
    categoryIcon: 'ph ph-scissors',
    shortDescription: 'Depilación del labio superior con cera',
    fullDescription: '',
    price: '4,5 €',
    duration: '10 min',
    image: 'assets/images/treatments/depilacion.jpg'
  },
  {
    slug: 'cejas-diseno-depilacion',
    name: 'Cejas: Diseño y Depilación',
    category: 'depilacion',
    categoryLabel: 'Depilación',
    categoryIcon: 'ph ph-scissors',
    shortDescription: 'Diseño personalizado y depilación de cejas',
    fullDescription: '',
    price: '5 €',
    duration: '15 min',
    image: 'assets/images/treatments/depilacion.jpg'
  },

  // Manicura y Pedicura
  {
    slug: 'manicura-tradicional',
    name: 'Manicura Tradicional',
    category: 'manicura-pedicura',
    categoryLabel: 'Manicura y Pedicura',
    categoryIcon: 'ph ph-hand-palm',
    shortDescription: 'Cuidado completo de las uñas con esmalte clásico',
    fullDescription: '',
    price: '10 €',
    duration: '30 min',
    image: 'assets/images/treatments/manicura-pedicura.jpg'
  },
  {
    slug: 'manicura-semipermanente',
    name: 'Manicura Semipermanente',
    category: 'manicura-pedicura',
    categoryLabel: 'Manicura y Pedicura',
    categoryIcon: 'ph ph-hand-palm',
    shortDescription: 'Manicura con esmalte de larga duración y acabado brillante',
    fullDescription: '',
    price: '18 €',
    duration: '45 min',
    image: 'assets/images/treatments/manicura-pedicura.jpg'
  },
  {
    slug: 'pedicura-completa',
    name: 'Pedicura Completa con esmaltado normal',
    category: 'manicura-pedicura',
    categoryLabel: 'Manicura y Pedicura',
    categoryIcon: 'ph ph-hand-palm',
    shortDescription: 'Tratamiento integral de pies: limado, cutículas y esmaltado normal',
    fullDescription: '',
    price: '25 €',
    duration: '50 min',
    image: 'assets/images/treatments/manicura-pedicura.jpg'
  }
];

export const CATEGORIES = [
  {
    id: 'facial-corporal',
    label: 'Facial y Corporal',
    icon: 'ph ph-sparkle',
    description: 'Tratamientos faciales y corporales para cuidar y realzar tu belleza natural'
  },
  {
    id: 'depilacion',
    label: 'Depilación',
    icon: 'ph ph-scissors',
    description: 'Depilación profesional con cera para una piel suave y duradera'
  },
  {
    id: 'manicura-pedicura',
    label: 'Manicura y Pedicura',
    icon: 'ph ph-hand-palm',
    description: 'Cuidado y embellecimiento de manos y pies con acabados perfectos'
  }
];
