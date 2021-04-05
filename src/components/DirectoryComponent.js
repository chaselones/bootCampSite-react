import React from "react";

// using extends React.Component just to remember this is an option other than importing destructuring
class Directory extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            campsites:[
                {
                    id: 0,
                    name: 'React Lake Campground',
                    image: 'assets/images/react-lake.jpg',
                    elevation: 1233,
                    description: "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers."
                },
                {
                  id: 1,
                  name: 'Chrome River Campground ',
                  image: 'assets/images/chrome-river.jpg',
                  elevation: 877,
                  description: "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River."
                },
                {
                    id: 2,
                    name: 'Breadcrumb Trail Campground',
                    image: 'assets/images/breadcrumb-trail.jpg',
                    elevation: 2901,
                    description: "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground."
                },
                {
                    id: 3,
                    name: 'Redux Woods Campground',
                    image: 'assets/images/redux-woods.jpg',
                    elevation: 42,
                    description: "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
                }
            ],
        };
    }

    render() {
        const directory = this.state.campsites.map((campsite)=>{
            return(
                <div key={campsite.id} className="col mt-3">
                    <img src={campsite.image} alt={campsite.name} />
                    <h2>{campsite.name}</h2>
                    <p>{campsite.description}</p>
                </div>
            );
        })

        return(
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                {/* <div className="row">
                    <ExampleParentComponent />
                </div> */}
            </div>
        );
    }
}

//-----------------------------------------------------------
//Parent component passing state to a child component as prop:
//-----------------------------------------------------------

//Parent Component:
// class ExampleParentComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             number: 333
//         }
//     }
//     render() {
//         return(
//             <ExampleChildComponent number={this.state.number} />
//         );
//     }
// }

//Child Component:
// class ExampleChildComponent extends React.Component {
//     render() {
//         return(
//             <div>
//                 <h1>{this.props.number}</h1>
//             </div>
//         )
//     }
// }
export default Directory;