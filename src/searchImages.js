import Notiflix from 'notiflix'

export default class SearchImages {
    constructor(){
  this.name = ''
  this.page = 1
    }

 fetchImages(){
    // console.log(this)
 const BASE_URL = 'https://pixabay.com/api/?key=29767436-14c23983d91939ba59ac81ecb'
 const BASE_PARAMS = '&image_type=photo&orientation=horizontal&safesearch=true&per_page=40'

 return fetch(`${BASE_URL}&q=${this.name}${BASE_PARAMS}&page=${this.page}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data.total)
        if (data.total === 0 ){
            Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
        } else {
            Notiflix.Notify.success(`Hooray! We found ${data.total} images`)
        }
        this.nextPage()

        return data.hits;
    })
    .catch(error => console.log(error))
   
 }  
 
 nextPage(){
    this.page +=1
 
 }

 reset(){
    this.page = 1
 }

 get newName() {
    return this.name
 }

 set newName(newN) {
   this.name = newN
 }
}
