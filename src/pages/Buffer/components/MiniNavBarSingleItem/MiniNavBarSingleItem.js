import * as React from "react";
import classNames from "classnames";
import "./miniNavBarSingleItem.css";

const MiniNavBarSingleItem = ({ heading, dropDown, dropDownItems, colorBlue }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div
			className="MiniNavBarSingleItem_container"
			onClick={() => setIsOpen(!isOpen)}
		>

       
			<span className={classNames("MiniNavBarSingleItem_heading", {'blueText': colorBlue})}>{heading}</span>

			{dropDown && (
				<span
					className={classNames("MiniNavBarSingleItem_chevron", {
						MiniNavBarSingleItem_chevron_rotate: isOpen,
					})}
				>
					<i className={"bi bi-chevron-down"}></i>
				</span>
			)}
            <div className="MiniNavBarSingleItem_bottom_separator"></div>
			{dropDownItems &&
				isOpen &&
				dropDownItems.map((el, i) => {
					const { iconClass, title } = el;
					return (
						<div
							key={i + iconClass + title}
							className={classNames("MiniNavBarSingleItem_roll_out_container")}
						>
							<span className="noTextDecoration spanIcon">
								<i className={iconClass}></i>
							</span>
							<span className="noTextDecoration titleHover">{title}</span>
						</div>
					);
				})}
			<hr />
		</div>
	);
};

export default MiniNavBarSingleItem;
