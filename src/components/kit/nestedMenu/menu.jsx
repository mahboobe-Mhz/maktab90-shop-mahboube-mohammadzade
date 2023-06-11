
import React from "react";
import Button from "@mui/material/Button";
import { Box} from "@mui/material";
 import { Dropdown, DropdownMenuItem, DropdownNestedMenuItem } from "./dropDown";

const Menu = () => {

    return (  <div>
   

        <Box sx={{ fontFamily:"nimkat", marginBottom:"10px"}}>
          <Dropdown 
            trigger={<h >محصولات</h>}
          
            menu={[
              <DropdownNestedMenuItem
              className="hover p-2"
                label="کالای خواب"
                rightIcon={<img width={20} src="/icons/icon-02.svg"></img>}
                menu={[
                  <DropdownMenuItem
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    تشک
                  </DropdownMenuItem>,
                  <DropdownMenuItem>
                    <Button
                      component="label"
                      sx={{
                        color: "#000",
                        textTransform: "none",
                        fontSize: "1rem"
                      }}
                      variant="text"
                    >
                      بالشت
                      <input
                        id="mdInput"
                        type="file"
                        accept={`.md`}
                        hidden
                        onChange={(e) => {console.log("hi");}}
                      />
                    </Button>
                  </DropdownMenuItem>,
                 
                ]}
              />,
              <DropdownNestedMenuItem
              className="hover"
        
                label="مبلمان اداری"
                rightIcon={<img width={20} src="/icons/icon-02.svg"></img>}
                menu={[
                  <DropdownMenuItem
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    Markdown
                  </DropdownMenuItem>,
                  <DropdownMenuItem
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    Plain HTML
                  </DropdownMenuItem>,
                  <DropdownMenuItem
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    Styled HTML
                  </DropdownMenuItem>
                ]}
              />,
              <DropdownNestedMenuItem
              className="hover"
                label="مبلمان واکسسوری"
                rightIcon={<img width={20} src="/icons/icon-02.svg"></img>}
                menu={[
                  <DropdownMenuItem className="margin-left:50"
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    PDF
                  </DropdownMenuItem>,
                  <DropdownMenuItem
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    Github Gist
                  </DropdownMenuItem>
                ]}
              />,
              <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              {"لوستر و تجهیزات روشنایی"}
            </DropdownMenuItem>, <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              {"لوستر و تجهیزات روشنایی"}
            </DropdownMenuItem>, <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              {"لوستر و تجهیزات روشنایی"}
            </DropdownMenuItem>, <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              {"لوستر و تجهیزات روشنایی"}
            </DropdownMenuItem>,
            ]}
           
          />
  
        </Box> 
      
      </div> );
}
 
export default Menu;