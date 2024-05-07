
import { reactive } from "vue";
import { Activity } from "@/entities/activity";




export const repo = reactive([]);
repo.push(new Activity("Café de Flore", "34", "cafe", "", "Paris", "https://a.cdn-hotels.com/gdcs/production147/d333/4adc1f05-e3e1-44d5-b57c-e552c90ae54b.jpg?impolicy=fcrop&w=800&h=533&q=medium", "An upscale bistro on the border of the 6th and 14th arrondissement along the Boulevard du Montparnasse."
))
repo.push(new Activity(
  "Le procope",
  "",
  "cafe",
  "",
  "Paris",
  "https://cdn.sortiraparis.com/images/1004/1467/767399-les-plus-beaux-cafes-fleuris-a-paris.jpg",
  "Like many Parisian cafés that followed, Le Procope became a preferred meeting place for many of history's most famous figures."
));

repo.push(new Activity(
  "Louvre Museum",
  "",
  "museum",
  "",
  "Paris",
  "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1200/v1598347807/post_images/paris-125/alex-holyoake-kgA5cRwr5IE-unsplash_1.jpg",
  "The Louvre Museum is the world's largest art museum and a historic monument in Paris, France."
));

repo.push(new Activity(
  "Le château de Versailles",
  "",
  "museum",
  "",
  "Versailles",
  "https://storage.googleapis.com/eyp-wordpress/1/2020/03/788px-france_paris_petit_palais_renove_entree_02.jpg",
  "The Palace of Versailles is hosting numerous operas, concerts, gala evenings and ballets in some of its exceptional spaces, including the Royal Opera and the Royal Chapel."
));

repo.push(new Activity(
  "Raspoutine",
  "",
  "nightclub",
  "",
  "Paris",
  "https://www.discoverwalks.com/blog/wp-content/uploads/2019/07/screen-shot-2019-07-24-at-11.27.58-am-1024x495.jpg",
  "If you like to listen to techno in elegant settings, Raspoutine is the place to go."
));



export function getActivity() {
  return repo
}

export function addActivities(activity) {
  repo.push(activity)
}

export function removeActivity(activity) {
  repo.splice(repo.indexOf(activity), 1);
}

export function addActivity(activityData) {
  const activity = new Activity(
    activityData.name,
    '',
    activityData.type,
    activityData.duration,
    '', // Assuming location is to be fetched or assigned separately
    activityData.photos.length > 0 ? activityData.photos[0] : '', // Assuming the first photo URL
    activityData.description
  );
  repo.push(activity);
}
