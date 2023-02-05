export const routesRepository = () => {
  const routes = [{
    slug: "paseo-coruna",
    region: "A Coruña",
    name: "Paseo de Coruña",
    grade: "6b+",
    location: {
      lat: "43.38061",
      lon: "-8.41043"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium dui in neque commodo, nec facilisis lacus feugiat. Curabitur vulputate leo in elit commodo viverra. Phasellus venenatis dictum tellus nec gravida. Nulla molestie, augue sit amet posuere pretium, tortor nisi euismod libero, pretium fringilla magna dui nec augue. Maecenas finibus nunc justo, nec consequat dolor aliquet in. Pellentesque a orci orci. Vestibulum pretium, sem at euismod aliquam, est libero volutpat orci, sit amet laoreet elit dolor et lectus. Aliquam varius libero quis leo dapibus vehicula. Phasellus sit amet diam ante. Phasellus ultrices bibendum condimentum. Cras risus est, vestibulum vitae orci quis, vehicula euismod nibh.",
    tags: ["Low tide", "Granite"],
    images: ["https://picsum.photos/1920/1080"]
  },
  {
    slug: "playa-arteixo",
    region: "Arteixo",
    name: "Playa de Arteixo",
    grade: "4c",
    location: {
      lat: "78.38061",
      lon: "8.41043"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium dui in neque commodo, nec facilisis lacus feugiat. Curabitur vulputate leo in elit commodo viverra. Phasellus venenatis dictum tellus nec gravida. Nulla molestie, augue sit amet posuere pretium, tortor nisi euismod libero, pretium fringilla magna dui nec augue. Maecenas finibus nunc justo, nec consequat dolor aliquet in. Pellentesque a orci orci. Vestibulum pretium, sem at euismod aliquam, est libero volutpat orci, sit amet laoreet elit dolor et lectus. Aliquam varius libero quis leo dapibus vehicula. Phasellus sit amet diam ante. Phasellus ultrices bibendum condimentum. Cras risus est, vestibulum vitae orci quis, vehicula euismod nibh.",
    tags: ["Low tide"],
    images: ["https://picsum.photos/1920/1080"]
  }];

  return {
    getAll: () => routes,
    getBySlug: (slug) => routes.find(route => route.slug === slug),
  }
}