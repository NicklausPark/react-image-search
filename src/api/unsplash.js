import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
        Authorization: 'Client-ID dadab39be6b4f44dad97dfaef301eacca6604bd8e9b03ea86ed3484b8faf3432'
    }
});