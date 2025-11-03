import {Box} from "@mui/material";
import Button from "@mui/material/Button";

interface ProductCounterProps {
    count: number;
    increaseCount: () => void;
    decreaseCount: () => void;
}

export const ProductCounter = ({count, increaseCount , decreaseCount} : ProductCounterProps) => {

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
                    onClick={decreaseCount}
                    sx={{
                        minWidth: 20,
                        width: 20,
                        height: 20,
                        padding: 0,
                    }}
                >-</Button>
                {count}
                <Button
                    variant="contained"
                    color="info"
                    onClick={increaseCount}
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
