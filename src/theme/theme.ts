import { createTheme } from "@mui/material";

import TablePagination from "./components/TablePagination";
import PaginationItem from "./components/PaginationItem";
import InputAdornment from "./components/InputAdornment";
import ListItemButton from "./components/ListItemButton";
import OutlinedInput from "./components/OutlinedInput";
import ListItemIcon from "./components/ListItemIcon";
import FilledInput from "./components/FilledInput";
import Pagination from "./components/Pagination";
import InputLabel from "./components/InputLabel";
import TextField from "./components/TextField";
import InputBase from "./components/InputBase";
import Toolbar from "./components/Toolbar";
import Button from "./components/Button";
import Badge from "./components/Badge";
import Input from "./components/Input";
import Paper from "./components/Paper";
import Card from "./components/Card";

import { shadows } from "./shadows";
import typography from "./typography";
import palette from "./palette";
import CssBaseline from "./components/CssBaseline";

export const theme = createTheme({
    typography: typography,
    palette: palette,
    components: {
        MuiTablePagination: TablePagination,
        MuiInputAdornment: InputAdornment,
        MuiListItemButton: ListItemButton,
        MuiPaginationItem: PaginationItem,
        MuiOutlinedInput: OutlinedInput,
        MuiListItemIcon: ListItemIcon, 
        MuiCssBaseline: CssBaseline,
        MuiFilledInput: FilledInput,
        MuiPagination: Pagination,
        MuiInputLabel: InputLabel,
        MuiInputBase: InputBase,
        MuiTextField: TextField,
        MuiToolbar: Toolbar,
        MuiButton: Button,
        MuiPaper: Paper,
        MuiInput: Input,
        MuiBadge: Badge,
        MuiCard: Card,
    },
});

shadows.forEach((shadow, index) => {
    theme.shadows[index + 1] = shadow;
});
