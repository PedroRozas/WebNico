import React from 'react';
//import { toast } from 'react-toastify';
import Header from '../header/Index'
import Banner from '../banner/Index'
import WhoWeAreArea from '../whoWeAreArea/Index'
import SolutionPart from '../solutionPart/Index'
import LatestServicesPart from '../LatestServicesPart/Index'
import WhyChoosePart from '../whyChoosePart/Index'
import TeamMemberPart from '../teamMemberPart/Index'
import OueChoosePart from '../OueChoosePart/Index'
import MeetUsPart from '../MeetUsPart/Index'
import LatestNewsPart from '../latestNewsPart/Index'
import Brand2Part from '../brand2Part/Index'
import Footer from '../layouts/partials/footer'






class Index1 extends React.Component {

    render() { 
        return ( 
            <React.Fragment>
                <Header />
                <Banner/>
                <WhoWeAreArea/>
                <SolutionPart/>
                <LatestServicesPart/>
                <WhyChoosePart/>
                <TeamMemberPart/>
                <MeetUsPart/>
                <LatestNewsPart/>
                <Brand2Part/>
                <Footer/>
                
            </React.Fragment>
         );
    }
}
 
export default Index1;