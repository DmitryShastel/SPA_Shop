import {Box} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";

export const ProductCounter = () => {

    const [countProduct, setProductCount] = useState(0)

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    width: 100,
                    alignItems: 'center',
                    gap: 1
                }}
            >
                <Button
                    variant="contained"
                    color="info"
                    onClick={() => {}}
                    sx={{
                        minWidth: 20,
                        width: 20,
                        height: 20,
                        padding: 0,
                    }}
                >-</Button>
                {countProduct}
                <Button
                    variant="contained"
                    color="info"
                    onClick={() => {}}
                    sx={{
                        minWidth: 20,
                        width: 20,
                        height: 20,
                        padding: 0,
                    }}
                >+</Button>
            </Box>
        </div>
    );
};
