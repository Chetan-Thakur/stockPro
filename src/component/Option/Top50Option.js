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
        minWidth: 650,
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

const Top50Option = () => {

    const classes = useStyles();
    const saySomething = (something) => {
        console.log(something);
    }
    console.log(saySomething('jjjjj'))
    return (
        <div>
            <TableContainer component={Paper}>
                <a href="https://marketchameleon.com/Reports/optionVolumeReport" target="_blank">Top 50 Options from Market chameleon </a>

                <Table className={classes.table} aria-label="simple table">

                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right">Symbol</StyledTableCell >
                            {/* <StyledTableCell align="right">CompanyName</StyledTableCell > */}
                            <StyledTableCell align="right">Sector</StyledTableCell >
                            <StyledTableCell align="right">TotalVolume</StyledTableCell >
                            <StyledTableCell align="right">CallVolume</StyledTableCell >
                            <StyledTableCell align="right">CallPercentage</StyledTableCell >
                            <StyledTableCell align="right">PutVolume</StyledTableCell >
                            <StyledTableCell align="right">PutPercentage</StyledTableCell >
                            <StyledTableCell align="right">AvgVolume_90Day</StyledTableCell >
                            <StyledTableCell align="right">RelativeVolume</StyledTableCell >
                            <StyledTableCell align="right">TradeCount</StyledTableCell >
                            <StyledTableCell align="right">TotalVolume</StyledTableCell >
                            <StyledTableCell align="right">Yahoo link</StyledTableCell >

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {optionData.data.map((optionDetails) => (
                            <StyledTableRow key={optionDetails.Symbol}>
                                <StyledTableCell align="right"><a href={`https://marketchameleon.com/Overview/${optionDetails.Symbol}`} target="_blank" rel="noreferrer">{optionDetails.Symbol}</a></StyledTableCell >
                                {/* <StyledTableCell align="right">{optionDetails.CompanyName}</StyledTableCell > */}
                                <StyledTableCell align="right">{optionDetails.Sector}</StyledTableCell >
                                <StyledTableCell align="right">{optionDetails.TotalVolume}</StyledTableCell >
                                <StyledTableCell align="right">{optionDetails.CallVolume}</StyledTableCell >
                                <StyledTableCell align="right">{100 - Math.floor(optionDetails.PutPercentage * 100)}</StyledTableCell >
                                <StyledTableCell align="right">{optionDetails.PutVolume}</StyledTableCell >
                                <StyledTableCell align="right">{Math.floor(optionDetails.PutPercentage * 100)}</StyledTableCell >
                                <StyledTableCell align="right">{optionDetails.AvgVolume_90Day}</StyledTableCell >
                                <StyledTableCell align="right">{optionDetails.RelativeVolume}</StyledTableCell >
                                <StyledTableCell align="right">{optionDetails.TradeCount}</StyledTableCell >
                                <StyledTableCell align="right">{optionDetails.TotalVolume}</StyledTableCell >
                                <StyledTableCell align="left"><a href={`https://finance.yahoo.com/quote/${optionDetails.Symbol}?p=${optionDetails.Symbol}`} target="_blank" rel="noreferrer">{optionDetails.Symbol}</a></StyledTableCell >
                            </StyledTableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Top50Option;
