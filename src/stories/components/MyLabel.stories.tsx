import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';




export default {
 title: 'UI/MyLabel',
 component: MyLabel,
 argTypes:{
    size:               { control:'select' },
    color:              { control:'select' },
    fontColor:          { control: 'color' },
    backgroundColor:    { control:'color' }
 }
}as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/>


export const Basic = Template.bind({});
Basic.args = {
    label:'Basic',
    size:'h3',
    allCaps: false
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    label:'all caps?',
    size:'h1',
    allCaps:true
    
}


export const Secondary = Template.bind({});
Secondary.args = {
    label:'Secondary',
    size:'h2',
    color: 'secondary'
}

export const tertiary = Template.bind({});
tertiary.args = {
    label:'Tertiary',
    size:'h2',
    color: 'tertiary'
}

// font color 

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    label:'Custom Font Color',
    size:'h2',
    fontColor:'pink'
}

// backgroundColor

export const customBackgroundColor = Template.bind({});
customBackgroundColor.args = {
    label:'Custom Font Color',
    size:'h2',
    fontColor: 'white',
    backgroundColor:'black'
}
