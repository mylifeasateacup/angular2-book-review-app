import { Injectable } from '@angular/core';

import { IProduct } from './product';

@Injectable()
export class ProductService {

    getProducts(): IProduct[] {
        return [
            {
                "productId": 1,
                "bookName": "A Conjuring Of Light",
                "authorName": "V.E. Schwab",
                "isbnNumber": "9-780 76538 7462",
                "releaseDate": "February 21, 2017",
                "description": "The precarious equilibrium among four Londons has reached its breaking point. Once brimming with the red vivacity of magic, darkness casts a shadow over the Maresh Empire, leaving a space for another London to rise.",
                "price": 12.91,
                "starRating": 4,
                "imageUrl": "https://images.gr-assets.com/books/1464017758l/29939230.jpg"
            },
            {
                "productId": 2,
                "bookName": "Blue Lily, Lily Blue",
                "authorName": "Maggie Stiefvater",
                "isbnNumber": "9-780 54542 4967",                
                "releaseDate": "October 21, 2014",
                "description": "Blue Sargent has found things. For the first time in her life, she has friends she can trust, a group to which she can belong. The Raven Boys have taken her in as one of their own. Their problems have become hers, and her problems have become theirs. ",
                "price": 8.63,
                "starRating": 4.5,
                "imageUrl": "https://images.gr-assets.com/books/1477103826l/17378508.jpg"
            },
            {
                "productId": 3,
                "bookName": "A Thousand Pieces of You (Firebird #1",
                "authorName": "Claudia Gray",
                "isbnNumber": "9-780 06227 8968",                
                "releaseDate": "November 4, 2014",
                "description": "Cloud Atlas meets Orphan Black in this epic dimension-bending trilogy by New York Times bestselling author Claudia Gray about a girl who must chase her father's killer through multiple dimensions.",
                "price": 5.99,
                "starRating": 4,
                "imageUrl": "https://images.gr-assets.com/books/1400166295l/17234658.jpg"
            },
            {
                "productId": 5,
                "bookName": "Dune",
                "authorName": "Frank Herbert",
                "isbnNumber": "9-780 34083 9935",                
                "releaseDate": "June 1, 2006",
                "description": "Set in the far future amidst a sprawling feudal interstellar empire where planetary dynasties are controlled by noble houses that owe an allegiance to the imperial House Corrino, Dune tells the story of young Paul Atreides (the heir apparent to Duke Leto Atreides and heir of House Atreides) as he and his family accept control of the desert planet Arrakis, the only source of the 'spice' melange, the most important and valuable substance in the cosmos. The story explores the complex, multi-layered interactions of politics, religion, ecology, technology, and human emotion as the forces of the empire confront each other for control of Arrakis.",
                "price": 1.99,
                "starRating": 4.5,
                "imageUrl": "https://images.gr-assets.com/books/1434908555l/234225.jpg"
            },
            {
                "productId": 8,
                "bookName": "Lair of Dreams (The Diviners #2)",
                "authorName": "Libba Bray",
                "isbnNumber": "9-780 31612 6045",                
                "releaseDate": "August 25, 2015",
                "description": "After a supernatural showdown with a serial killer, Evie O’Neill has outed herself as a Diviner. With her uncanny ability to read people’s secrets, she’s become a media darling, earning the title “America’s Sweetheart Seer.” Everyone’s in love with the city’s newest It Girl…everyone except the other Diviners.",
                "price": 10.74,
                "starRating": 3,
                "imageUrl": "https://images.gr-assets.com/books/1433667109l/16060716.jpg"
            },
            {
                "productId": 10,
                "bookName": "The Diviners (The Diviners #1)",
                "authorName": "Libba Bray",
                "isbnNumber": "9-780 31612 6113",        
                "releaseDate": "September 18, 2012",
                "description": "Evie O’Neill has been exiled from her boring old hometown and shipped off to the bustling streets of New York City—and she is pos-i-tute-ly ecstatic. It’s 1926, and New York is filled with speakeasies, Ziegfeld girls, and rakish pickpockets. The only catch is that she has to live with her uncle Will and his unhealthy obsession with the occult.",
                "price": 8.77,
                "starRating": 3.5,
                "imageUrl": "https://images.gr-assets.com/books/1336424966l/7728889.jpg"
            }
        ]
    }

}