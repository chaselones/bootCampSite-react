import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

// using extends React.Component just to remember this is an option other than importing destructuring
class Directory extends React.Component {
    //To hold local state, we need a constructor
    constructor(props) {
        super(props);
        this.state = {
            selectedCampsite: null
        };
    }

    onCampSiteSelect(campsite) {
        //Outside of the constructor, always use setState() to change state.
        this.setState({ selectedCampsite: campsite });
    }

    renderSelectedCampSite(campsite) {
        if (campsite) {
            return (
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name}></CardImg>
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        return <div />;
    }

    render() {
        //If you tell react to render an array, it automatically renders each element in the array.
        const directory = this.props.campsites.map((campsite) => {
            //This is a function return, not the react render function return
            return (
                //The JSX elements below are now added to a new array called 'directory'
                //ID required for top level item in the array (this being the div)
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onCampSiteSelect(campsite)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })

        return (
            <div className="container">
                <div className="row">
                    {/* Rendering the array: */}
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedCampSite(this.state.selectedCampsite)}
                    </div>
                </div>
                {/* Example of parent/child prop relationship below: */}
                {/* <div className="row">
                    <ExampleParentComponent />
                </div> */}
            </div>
        );
    }
}

export default Directory;

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

//Skeleton for a React Class component:
// class ThisClass extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={};
//     }
//     render(){
//         return(
//             <h1>This is a heading 1</h1>
//         );
//     }
// }