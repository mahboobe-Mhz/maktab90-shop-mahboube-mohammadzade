import * as React from "react";
import styled from "@emotion/styled";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NestedMenuItem from "./nestedMenuItem";

export const Dropdown = React.forwardRef(
  (
    {
      trigger,
      menu,
      keepOpen: keepOpenGlobal,
      isOpen: controlledIsOpen,
      onOpen: onControlledOpen,
      minWidth
    },
    ref
  ) => {
    const [isInternalOpen, setInternalOpen] = React.useState(null);

    const isOpen = controlledIsOpen || isInternalOpen;

    let anchorRef = React.useRef(null);
    if (ref) {
      anchorRef = ref;
    }

    const handleOpen = (event) => {
      event.stopPropagation();

      if (menu.length) {
        onControlledOpen
          ? onControlledOpen(event.currentTarget)
          : setInternalOpen(event.currentTarget);
      }
    };

    const handleClose = (event) => {
      event.stopPropagation();

      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }

      handleForceClose();
    };

    const handleForceClose = () => {
      onControlledOpen ? onControlledOpen(null) : setInternalOpen(null);
    };

    const renderMenu = (menuItem, index) => {
      const { keepOpen: keepOpenLocal, ...props } = menuItem.props;

      let extraProps = {};
      if (props.menu) {
        extraProps = {
          parentMenuOpen: isOpen
        };
      }

      return React.createElement(menuItem.type, {
        ...props,
        key: index,
        ...extraProps,
        onClick: (event) => {
          event.stopPropagation();

          if (!keepOpenGlobal && !keepOpenLocal) {
            handleClose(event);
          }

          if (menuItem.props.onClick) {
            menuItem.props.onClick(event);
          }
        },
        children: props.menu
          ? React.Children.map(props.menu, renderMenu)
          : props.children
      });
    };

    return (
      <>
        {React.cloneElement(trigger, {
          onClick: isOpen ? handleForceClose : handleOpen,
          ref: anchorRef
        })}

        <Menu
          PaperProps={{ sx: { minWidth: minWidth ?? 0 , marginTop:"10px",marginRight:"5px", borderRadius:"30px", paddingTop:"5px",paddingBottom:"5px" } }}
          anchorEl={isOpen}
          open={!!isOpen}
          onClose={handleClose}
        >
   
          {React.Children.map(menu, renderMenu)}
         
        </Menu>
      </>
    );
  }
);

export const DropdownMenuItem = styled(MenuItem)`
  display: flex;
  padding-top:10px ;
  justify-content: space-between !important;

  & > svg {
    margin-left: 20px!important;
  
  }
`;

export const DropdownNestedMenuItem = styled(NestedMenuItem)`
  display: flex;
  direction:rtl;
  justify-content: space-between !important;
  padding-top:10px ;

  & > svg {
   
    margin-right:0px;
   
  }
`;
