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

const Top10Call = () => {

    const classes = useStyles();
    const sortCallData = optionData.data.sort(function (a, b) {
        return a.PutPercentage - b.PutPercentage;
    })
    return (
        <div>
            <TableContainer component={Paper}>
                Top 10 Call purchased

                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Symbol</StyledTableCell >
                            <StyledTableCell align="right">Call Vol</StyledTableCell >
                            <StyledTableCell align="right">Call %</StyledTableCell >
                            <StyledTableCell align="right">Yahoo link</StyledTableCell >

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortCallData.slice(0, 10).map((sortDataDetail) => (
                            <StyledTableRow key={sortDataDetail.Symbol}>
                                <StyledTableCell align="left"><a href={`https://marketchameleon.com/Overview/${sortDataDetail.Symbol}`} target="_blank" rel="noreferrer">{sortDataDetail.Symbol}</a></StyledTableCell >
                                <StyledTableCell align="right">{sortDataDetail.PutVolume}</StyledTableCell >
                                <StyledTableCell align="right">{100 - Math.floor(sortDataDetail.PutPercentage * 100)}</StyledTableCell >
                                <StyledTableCell align="left"><a href={`https://finance.yahoo.com/quote/${sortDataDetail.Symbol}?p=${sortDataDetail.Symbol}`} target="_blank" rel="noreferrer">{sortDataDetail.Symbol}</a></StyledTableCell >
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Top10Call;
