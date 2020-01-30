// This box must be useful for something... how about some extra comments?

// This is a css only solution to an expanding menu
// It uses radio buttons and...


// These standard CSS "tricks"
// the :checked css pseudo class
// max-width transition effect
// Block, float:left is used for menu items, so they'll display inline and react to each other's widths
// Line-height and vertical align is used to ensure that the icons/text and things stay lined up.
// * Vertical align works in this case because inline-block elements are next to each other. 
// * They vertically align with themselves and not the parent.

/*
The icons are font awesome icons
https://fortawesome.github.io/Font-Awesome/
*/

/*
The html structure goes like this

div.menu {
	div.menu_item {
		input.toggle {
		}
			.expander {
				label {
					i.menu_icon {}
					span.menu_text {}
				}
			}
	}
}
*/

// How it all comes together
//
// 1.) By default the max-width of the expander is set to the icon size plus a little extra for padding.
// 2.) The expander overflow is set to hidden
// 3.) Fun fact. Labels work to toggle check boxes too. So we hide the check box itself.
// 4.) In the html we set the name of each radio button the same, so they interact with each other when clicked
// 5.) Give each radio a unique ID
// 6.) Using CSS, we then create a property that selects elements next to the input.toggle element
//     When it is checked.
// 7.) Using this selector we set the max-width of the .expander and give it a transition property of all. For fun I added a background change as well.
//     * Max-width will allow us to use a dynamic width to transition to with CSS. But it needs a maxiumum value. I set an arbitrary width of 16rem.
//       If this is increased, the timing of the transition CSS property will need to be adjusted since it uses the max value to set the speed
//     * That should get the boxes expanding and closing on click.
// 8.) To make it look like a menu. I wrapped each .menu_item with another div and gave it some background.
// 9.) There is also an issue of wrapping text. To make the button text not wrap apply the white-space: nowrap; property to the menu_item.
// 10.) From there, it's all just stylistic adjustments