import React from 'react';
import { connect } from 'react-redux';
import { Actions, withTheme } from '@twilio/flex-ui';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

//import NestedMenuItem from "material-ui-nested-menu-item";

import { CannedResponsesStyles } from './CannedResponses.Styles';

//const { department } = manager.workerClient.attributes;

//if (department === "Live Chat") {

class CannedResponses extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });

    Actions.invokeAction('SetInputText', { //Set =InputText pushes the selected message into the text box for the agent to edit before pressing send. Use SendMessage to have the message sent automatically
      channelSid: this.props.channelSid,
      body: event.target.value
    });
  }



  render() {
    return (
      <CannedResponsesStyles>
       <FormControl className="form">
          <InputLabel className="input-label" htmlFor="response">Canned Responses</InputLabel>
          <Select
            value={this.state.response}
            onChange={this.handleChange}
            name="response"
          >
            <text>General Responses</text>
            <MenuItem value="Thank you very much for your time today, if we can be of any further assistance please don&#39;t hesitate to contact us and
                            we will be happy to help.">Goodbye</MenuItem>
            <MenuItem value="Is there anything else I can help you with?">Anything else?</MenuItem>
            <MenuItem value="May I take your full name, postcode and telephone number please?">Customer Details</MenuItem>
            <MenuItem value="I do apologise, we have an alarm sounding and need to evacuate the building.">Alarm</MenuItem>
            <MenuItem value="Our purchasing team will be the best people to help you. They can be contacted on the following email:
                            purchasing@vertumotors.com">Cold Call</MenuItem>
            <MenuItem value="Hi, can you please advise if you require any further assistance.">2 min- No response</MenuItem>
            <MenuItem value="My apologies, we appear to have been disconnected. If you require further assistance please select again to connect to
                            one of our live chat operators.">5 min- No response</MenuItem>
            <MenuItem value="as you have continued to use offensive language towards me I will now terminate this chat.">Offensive language - Termination</MenuItem>
            <MenuItem value="I am trying to help you but if you continue to use offensive language towards me I will have no option but to terminate this chat.">Offensive language - Warning</MenuItem>
            <MenuItem value="If you have any question regarding a position, please send an email to recruitment@vertumotors.com with details of your query and a member of the team will be in touch.">Recruitment - Application query</MenuItem>
            <MenuItem value="Hi and thank you for your enquiry. All of our vacancies are advertised at www.vertucareers.com and we do ask all applicants to apply online. We do not accept any other form of application.">Recruitment - Enquiry response</MenuItem>
            <MenuItem value="All concerns can be directed to our Customer Services team on 0191 497 0404. They operate between the hours of 9am and 5pm, Monday to Friday. Outside of these hours you can contact them via email at vertucustomerservices@vertumotors.com">Customer concern</MenuItem>
            <MenuItem value="Are you happy to opt into marketing preferences to receive all the benefits of service & MOT reminders, new product launches, events and recall notifications?">GDPR</MenuItem>
            <text>Sales Responses</text>
            <MenuItem value="The quickest way for the team to get back to you would be by telephone, is there anyway that we could please take a contact number for you?">Sales - Re-ask for contact number</MenuItem>
            <MenuItem value="You take control of a vehicle for a contractual period – usually referred to as the ‘lease period’. You will make fixed monthly payments for the duration of the contract – when the contract expires you will simply return the vehicle and take out a new lease. Lease means you never have to worry about resale values of your vehicle.">Sales - Lease</MenuItem>
            <MenuItem value="Hire Purchase allows you to take ownership of a vehicle once all payments are made. This is one of the most popular methods to buy a new vehicle. You pay an initial deposit, then pay off the balance in monthly payments over an agreed period of time, when the payments are complete the vehicle is yours. This method of purchase allows you to tailor your finance package as deposit, length of time and monthly payments are all flexible.">Sales - HP</MenuItem>
            <MenuItem value="PCP (Personal Contract Purchase) a simple cost effective way to buy your new or nearly new vehicle. You choose the vehicle, the deposit, how long you want the contract to run for and the mileage you intend to do. You will then receive a quote for fixed cost motoring for the length of the contract. At the end of the contract you have a choice to either buy the vehicle outright for an agreed lump sum (the GMFV or final balloon payment), or hand the vehicle back to the lender.">Sales - PCP</MenuItem>
            <MenuItem value="To apply for car finance through Car Credit Assured you must meet the following criteria: • Hold a full UK driving license. • Have been a UK resident for the last three years and have an address history. • Employed and work a minimum of 16 hours a week. • Aged 18 years or over.">Sales- Car credit assured</MenuItem>
            <MenuItem value="We can move cars, however this is generally only done as part of the sale and may incur a delivery fee. If a delivery fee is applicable the cost will be confirmed by the dealership selling the car.">Sales- Delivery</MenuItem>
            <MenuItem value="We can provide you with this information, however this may take a little bit of time to get. If I can take some contact details, once we have this information we will get in touch with you to go over this?">Sales - Finance reply</MenuItem>
            <MenuItem value="The last recorded location of the vehicle you are enquiring about is ***. Would you like to arrange a test drive?">Sales - Location</MenuItem>
            <MenuItem value="The last recorded mileage of the vehicle you are enquiring about is ***. If I can take some further details, I can arrange for this information to be confirmed and for one of our Sales Team to contact you?">Sales - Mileage</MenuItem>
            <MenuItem value="What we can do is carry out a search of the stock to see if we have anything that may be of interest local to you. If I can take a few details from you we will get back to you as quickly as possible with the information?">Sales - Vehicle search</MenuItem>
            <text>Aftersales (Bookings) Responses</text>
            <MenuItem value="The air conditioning over time loses between 10-15% of the refrigerant gas, this can seep out of the system each year. This leaves the system not operating effectively as it should be. With a recharge, we restore the system with the correct gas and lubricant levels, remove all debris from the system and carry out thorough checks for performance.">Aftersales-Bookings-ACS</MenuItem>
            <MenuItem value="The Emissions Control Service is a two-part treatment. The first treatment is an oil conditioner which helps improves the grade of your oil, prolonging the oils life. The second treatment goes down your fuel line and cleans out the injectors and the fuel systems, which are the parts that our technicians are unable to reach. The two treatments work together to help with the engine’s performance, can reduce emissions for your MOT test and can also help improve your miles per gallon.">Aftersales-Bookings- ECS</MenuItem>
            <MenuItem value="With the air conditioning decontamination treatment, we put an antibacterial treatment through the system which will clean out all the bacteria, mould and fungi which builds up over time. This means that when you switch on your Air Conditioning you are not breathing in all that build up but are breathing in purer air. This treatment also helps to prolong the life of your Air Conditioning system.">Aftersales-Bookings-ACD</MenuItem>
            <MenuItem value="Did you have a date in mind at all? The next available date is ** ***’">Aftersales-Bookings- Date confirmation</MenuItem>
            <MenuItem value="I can see you have a service plan, providing no payments have been missed and you are not planning to book your vehicle in early the service would be covered for you.">Aftersales- Bookings- Service plan confirmation</MenuItem>
            <MenuItem value="Certainly, may I please confirm your vehicles registration, current mileage and which dealership you would like to use and we can get that booked in for you?">Aftersales-Bookings- Confirmation of details</MenuItem>
            <MenuItem value="Whilst we are not a **** dealership we can still service your vehicle, we wouldn’t however be able to carry out any warranty work or recalls. Unfortunately, as it is a non-franchise vehicle we can not quote a price via live chat. What I can do for you is arrange a call from our service team with a quote on that.">Aftersales- Bookings- Non franchise vehicles</MenuItem>
            <MenuItem value="You do have the option with the plan not to pay for a loan car however the policy excess would be £500. Alternatively you have the option to pay £12.50 to reduce the excess to £50.">Aftersales- Booking- CDW service plan</MenuItem>
            <MenuItem value="That's all booked in for you. We will carry out a visual health check of the vehicle and we will also do a complimentary wash. The cost of the service as advised is £*** and I have booked that in for waiting appointment/collection/courtesy vehicle on the *date* at *time* [from *address*]. Please bring with you/leave in the vehicle the Service Booklet and the Locking Wheel Nut Key, if your vehicle is fitted with alloy wheels">Aftersales- Booking- Confirmation</MenuItem>
            <text>Aftersales (Other) Responses</text>
            <MenuItem value="I do need to make you aware that there is a fee applicable for the loan of a courtesy vehicle. This fee is £20 for the day, this covers the insurance on the vehicle with a minimal excess of £50 in the event of any incidents.">Aftersales- Courtesy Car Fee</MenuItem>
            <MenuItem value="Our Bristol Street/Macklin Motors Service consists of the following : Oil and Filter change, Check brake fluids, Visually inspect front and rear brakes, Suspension and steering check and lubricated where necessary, Check and set tyre pressures, Check lights and levels, Check anti-freeze, Check wiper blades, Check exhaust condition, Battery and Alternator check and complimentary Wash.">Aftersales- BSM/ MM service</MenuItem>
            <MenuItem value="Can you please confirm that you have held your licence for longer than 12 months, are between the age of 21 and 85, that you have had no more than 9 points on your license in the last 3 years and no disqualification's in the last 5 years?">Aftersales- Courtesy car declaration</MenuItem>
            <MenuItem value="I do need to make you aware you may be subject to an initial diagnostic charge of ******** if the fault is not covered under warranty, however if the fault is covered under warranty the charge may not apply.">Aftersales- Diagnostic fee statement</MenuItem>
            <MenuItem value="You do not have to bring your vehicle to Bristol Street/Macklin/Vertu Motors, however the garage you choose must use genuine manufacturer parts and complete your service to the manufacturer’s specifications for the age/mileage of your vehicle. Also, they must be VAT registered and be able to produce a detailed computer generated invoice; showing all parts used and the specification of any lubricants. Failure to do this may invalidate the warranty.">Aftersales- Service and Warranty</MenuItem>
            <MenuItem value="Our Motor Assured Warranty Department will be the best people to help you. They can be contacted on 0191 491 2222 between 8.30 to 17.30 Monday to Friday or by email at warranty@vertumotors.com.">Aftersales- Warranty Enquiry</MenuItem>
            <MenuItem value="If a vehicle fails and you have the work carried out within the dealership it would then be down to the Service Manager whether the re-test fee would apply, If you have the work carried out elsewhere and the work required is visual there should be no re-test fee, however if the work required to pass the MOT isn’t visual for example emissions and the vehicle needed to be re-tested then a fee could apply this again will be discussed by the service department on the day.">MOT Re-Test</MenuItem>
            <MenuItem value="We look to cover you for a sudden mechanical or sudden electrical failure of a part unless it is specifically written out of page 7 of your blue warranty booklet.">Motor assured warranty cover</MenuItem>
          </Select>
        </FormControl>
      </CannedResponsesStyles>
    )
  }
};



const mapStateToProps = (state, ownProps) => {
  let currentTask = false;
  state.flex.worker.tasks.forEach((task) => {
    if (ownProps.channelSid === task.attributes.channelSid) {
      currentTask = task;
    }
  })

  return {
    state,
    currentTask,
  }
}

//} else {}

export default connect(mapStateToProps)(withTheme(CannedResponses));
