import React from "react";
import axios from "axios";
import "./css/Discord.css";
axios.defaults.withCredentials = true;
const e = React.createElement;

class discordWidget extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
  }


  componentDidMount() {
    axios.get('https://discordapp.com/api/guilds/706394037094973450/widget.json')
      .then(resp => {
        this.setState({ data: resp.data })
      })
  }

  render() {
    var channels
    var members
    var link
    var sname
    var mlength
    if (this.state.data !== null) {
      channels = this.state.data.channels.map(channel => {
        return e(
          'div',
          { key: channel.id, className: 'dc-channel dc-rounded dc-shadow' },
          e(
            'span',
            '',
            channel.name
          )
        )
      })
      members = this.state.data.members.map(member => {
        var mavatar = e(
          'img',
          { src: member.avatar ? 'https://cdn.discordapp.com/avatars/' + member.id + '/' + member.avatar : member.avatar_url, className: "dc-shadow" }
        )
        var mstatus
        switch (member.status) {
          case 'dnd':
            mstatus = e('div', { className: 'dc-status-inner dc-busy' })
            break
          case 'idle':
            mstatus = e('div', { className: 'dc-status-inner dc-idle' })
            break
          default:
            mstatus = e('div', { className: 'dc-status-inner dc-online' })
            break
        }
        var mbot = member.bot ? e('span', { className: 'dc-bot dc-rounded' }, 'BOT') : null
        var mname = e(
          'span',
          { className: 'left' },
          member.username
        )
        var mgame = member.game ? e(
          'span',
          { className: 'right' },
          member.game.name
        ) : null
        return e(
          'div',
          { key: member.id, className: "dc-member dc-rounded dc-shadow" },
          e('div', { className: 'dc-status' }, mstatus), mavatar, mname, mbot, mgame
        )
      })
      link = e('div', { className: 'dc-link' },
        e('span', '', '측면의 버튼을 클릭하여 서버에 가입하십시오.'),
        e('a', { className: 'dc-rounded dc-shadow', href: this.state.data.instant_invite }, '참가'))
      sname = this.state.data.name
      mlength = this.state.data.members.length
    }

    var header = e('h1', { className: 'dc-main-header dc-rounded dc-shadow' }, sname + ' Discord')
    var header1 = e('h1', { className: 'dc-header' }, '채널')
    var header2 = e('h1', { className: 'dc-header' }, '온라인 - ' + mlength)
/*     var credit = e('span', { className: 'dc-credit' }, 'aybertocarlos') */

    return (
      e(
        'div',
        { className: 'dc-container dc-rounded' },
        header, e('div', { className: 'dc-alt-container' }, header1, channels, header2, members), link
      )
    )
  }
}

export default discordWidget;