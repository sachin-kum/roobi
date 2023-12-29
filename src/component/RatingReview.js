import React from 'react'

import StarRating from "react-star-ratings";
function RatingReview() {
  return (
    <>
         <div className="row listing-review" >
         <hr />
          <div className="col-md-6 review-para-1">
           
            <div className="rating-reviews py-4">
              <h2 className="py-3">Ratings & Reviews</h2>
              <p>Michael Reed | A Week Ago</p>
              <StarRating
                name="small-rating"
                caption="Small"
                size={10}
                totalStars={5}
                rating={5}
              />
              <div className="review_content py-2">
                <p>
                 
                  Fantastic pizza and awesome owners! We booked Katie & Elliott
                  for our wedding and the process and event was so easy to
                  organise. Everyone loved the pizzas and it made our day that
                  bit more special.
                </p>
              </div>

              <p>Jenn H | 2 weeks Ago </p>
              <StarRating
                name="small-rating"
                caption="Small"
                size={10}
                totalStars={5}
                rating={5}
              />
              <div className="review_content py-2">
                <p>
                 
                  Flanco recently provided pizza for the evening of our wedding.
                  They were fantastic! Accommodating and helpful in the lead up,
                  and absolutely made the evening for us! We lost count of how
                  many guests have told us how delicious the pizza was
                  (especially the Underdog) - more than one said it was the best
                  they have ever had. Would 100% recommend them!
                </p>
              </div>

              <p>Sarah Blackmore | 1 month Ago</p>
              <StarRating
                name="small-rating"
                caption="Small"
                size={10}
                totalStars={5}
                rating={5}
              />
              <div className="review_content py-2">
                <p>
                  Thank you to Flanco Pizzas, Katie and Elliot, who provided
                  delicious Pizzas at our family party at Wivelsfield Village
                  Hall. Lots of positive comments from our guests, catered for
                  various dietary needs and would highly recommend - Excellent
                  😀
                </p>
              </div>
              <div className="listing-read-more py-3">
                <button>READ MORE REVIEWS</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 review-para-2 ">
            <p className="listing-rating-para">Joe | 1 Month Ago </p>
            <StarRating
              name="small-rating"
              caption="Small"
              size={10}
              totalStars={5}
              rating={5}
            />
            <div className="review_content py-2">
              <p>
                Excellent pizzas made by lovely people, my guests couldn't get
                enough! Real professional set up and will be booking them again.
                Thank you guys.
              </p>
            </div>

            <p className="listing-rating-para">Hannah Lewry | 5 Months Ago  </p>
            <StarRating
              name="small-rating"
              caption="Small"
              size={10}
              totalStars={5}
              rating={5}
            />
            <div className="review_content py-2">
              <p>
              Perfect sourdough crusts and great flavours. Have tried a wide variety of the toppings now and all have been great. The garlic pizza bread is AMAZING 🤩
              </p>
            </div>

            <p className="listing-rating-para"> Leonie Miller | 8 months Ago </p>
            <StarRating
              name="small-rating"
              caption="Small"
              size={10}
              totalStars={5}
              rating={5}
            />
            <div className="review_content py-2">
              <p>
              These pizzas are absolutely amazing!  It’s easy to order, and you always get quick responses to messages. But best of all the pizzas are out of this world!  We usually get them on a Thursday from Hangleton and are talking about it from Monday onwards. It’s the highlight of our week! Thanks for delicious food guys!
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default RatingReview