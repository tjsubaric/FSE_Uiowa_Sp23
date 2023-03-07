import {Grid} from '@mui/material'
import DrCard from './DrCard'
import DrCard2 from './DrCard2'
import DrCard3 from './DrCard3'

export const DoctorsGrid = () => {
    return (
        <Grid container my = {1} columnSpacing = {2} rowSpacing = {15} marginLeft = {14}>
            <Grid item md = {4}>
                <DrCard/>
            </Grid>
            <Grid item md = {4}>
                <DrCard3/>
            </Grid>
            <Grid item md = {4}>
                <DrCard2/>
            </Grid>
            <Grid item md = {4}>
                <DrCard/>
            </Grid>
            <Grid item md = {4}>
                <DrCard3/>
            </Grid>
            <Grid item md = {4}>
                <DrCard2/>
            </Grid>
            <Grid item md = {4}>
                <DrCard/>
            </Grid>
            <Grid item md = {4}>
                <DrCard3/>
            </Grid>
            <Grid item md = {4}>
                <DrCard2/>
            </Grid>
        </Grid>
    )
}