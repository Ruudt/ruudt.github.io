'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const Datetime = require('../../utils/datetime');

const Entry = React.createClass({
    propTypes: {
        entry: ResumePropTypes.education
    },

    render: function () {
        const startDate = Datetime.getDisplayFromDate(this.props.entry.startDate);
        const endDate = Datetime.getDisplayFromDate(this.props.entry.endDate);
        return (
            <div className='row item'>
                <div className='twelve columns'>
                    <h3>{this.props.entry.institution}</h3>
                    <p className='info'>
                        {this.props.entry.area}
                        <span> &bull; </span>
                        <em className='date'>{startDate} - {endDate}</em>
                    </p>
                </div>
            </div>
        );
    }
});

const Education = React.createClass({
    propTypes: {
        content: ResumePropTypes.education_set
    },

    render: function () {
        return (
            <div className='row education'>
                <div className='three columns header-col'>
                    <h1>
                        <span>Education</span>
                    </h1>
                </div>
                <div className='nine columns main-col'>
                    {this.props.content.map(function (entry, index) {
                        return (
                            <Entry key={index} entry={entry}/>
                        );
                    })}
                </div>
            </div>
        );
    }
});

module.exports = Education;