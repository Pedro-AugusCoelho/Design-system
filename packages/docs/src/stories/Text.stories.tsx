import { StoryObj, Meta} from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
    title: "Typography/Text",
    component: Text,
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias nisi, explicabo provident quis quibusdam maiores, ab veniam omnis, iusto minima quasi asperiores molestiae odit doloribus qui voluptates delectus maxime.'
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong Text',
        as: 'strong'
    }
}