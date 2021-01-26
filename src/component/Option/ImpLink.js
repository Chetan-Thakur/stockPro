import React from 'react';
import optionData from '../../data/optionData.json'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles({
    table: {
        minWidth: 100,
    },
});
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const ImpLink = () => {
    const classes = useStyles();

    return (
        <div>
            <TableContainer component={Paper}>
              Important Links

                <Table className={classes.table} aria-label="simple table">

                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Important Links</StyledTableCell >
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <StyledTableRow >
                            <StyledTableCell align="left"><a href={`https://marketchameleon.com/Reports/UnusualOptionVolumeReport`} target="_blank" rel="noreferrer">High Daily Option Trading Volumes</a></StyledTableCell >
                        </StyledTableRow>
                        <StyledTableRow >
                            <StyledTableCell align="left"><a href={`https://marketchameleon.com/Reports/MarketMovers`} target="_blank" rel="noreferrer">Stock Market Trading Activity</a></StyledTableCell >
                        </StyledTableRow>
                        <StyledTableRow >
                            <StyledTableCell align="left"><a href={`https://finance.yahoo.com/trending-tickers`} target="_blank" rel="noreferrer">Yahoo trending-tickers</a></StyledTableCell >
                        </StyledTableRow>
                        <StyledTableRow >
                            <StyledTableCell align="left"><a href={`https://finance.yahoo.com/most-active`} target="_blank" rel="noreferrer">Yahoo most active</a></StyledTableCell >
                        </StyledTableRow>
                        <StyledTableRow >
                            <StyledTableCell align="left"><a href={`https://finance.yahoo.com/gainers`} target="_blank" rel="noreferrer">Yahoo Top gainer</a></StyledTableCell >
                        </StyledTableRow>
                        <StyledTableRow >
                            <StyledTableCell align="left"><a href={`https://finance.yahoo.com/losers`} target="_blank" rel="noreferrer">Yahoo top losser</a></StyledTableCell >
                        </StyledTableRow>
                        <StyledTableRow >
                            <StyledTableCell align="left"><a href={`https://finance.yahoo.com/most-active`} target="_blank" rel="noreferrer">Yahoo most active</a></StyledTableCell >
                        </StyledTableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ImpLink;
