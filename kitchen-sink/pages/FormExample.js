import React from 'react';
import {
  Container,
  Grid,
  Col,
  Group,
  Icon,
  List,
  Field,
  Button,
  Switch,
} from 'amazeui-dingtalk';

let fields = [
  {
    title: 'Username',
    type: 'text',
    icon: 'person'
  },
  {
    title: 'Password',
    type: 'password',
    icon: 'info'
  },
  {
    title: 'Birth date',
    type: 'date',
    icon: 'refresh'
  },
  {
    title: 'Select',
    type: 'select',
    icon: 'star',
    children: [
      <option value="m" key={`m`}>Male</option>,
      <option value="f" key={`f`}>Female</option>
    ],
  },
  {
    title: 'TextArea',
    type: 'textarea',
    icon: 'list',
  }
];

const devices = ['iPhone 6', 'MacBook Pro Retina', 'iMac 5K'];

function handleSwitch() {
  console.log(this.getValue());
}

const switchProps = {
  onValueChange: handleSwitch,
  value: true,
};

const mySwitch = <Switch onValueChange={handleSwitch} defaultChecked />;

const FormExample = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs.select.getValue());
  },

  render() {
    return (
      <Container {...this.props}>
        <Group
          header="基本样式"
        >
          <Field
            label="Your Name"
            containerClassName="my-label"
            placeholder="What's your name."
          />

          <Field
            label="Password"
            placeholder="Your password."
            type="password"
          />

          <Field
            label="Age"
            placeholder="Your age."
            type="number"
          />

          <Field
            type="select"
            label="Select"
            ref="select"
            defaultValue="m"
          >
            <option value="m">Male</option>
            <option value="f">Female</option>
          </Field>

          <Field
            label="Commnet"
            placeholder="Say something you whant."
            type="textarea"
          />

          <Field
            value="提交"
            type="submit"
            amStyle="secondary"
            block
            onClick={this.handleSubmit}
          />
        </Group>

        <Group
          header="Form Set"
        >
          <div className="form-set">
            <Field placeholder="Name." />
            <Field placeholder="Email." />
            <Field placeholder="Password." />
          </div>

          <Button amStyle="primary" block>提交</Button>
        </Group>

        <Group
          header="Field Group"
        >
          <Field
            placeholder="You domain."
            labelBefore="www."
            labelAfter=".com"
            containerClassName="my-group"
          />

          <Field
            placeholder="Your email."
            labelBefore={<Icon name="person" />}
            btnAfter={<Button>Subscribe</Button>}
          />

          <Field
            placeholder="Keywords..."
            labelBefore={<Icon name="search" />}
            btnAfter={<Button>Search</Button>}
          />
        </Group>

        <h2>列表嵌套表单</h2>

        <Group
          header="Fields List"
          noPadded
        >
          <List>
            {fields.map((field, i) => {
              return (
                <List.Item
                  key={i}
                  nested={field.type === 'select' || field.type === 'textarea' ?
                    field.type : 'input'}
                  nestedProps={{...field, placeholder: field.title + '...'}}
                >
                </List.Item>
              );
            })}
          </List>
        </Group>

        <Group
          header="With Label"
          noPadded
        >
          <List>
            {fields.map((field, i) => {
              return (
                <List.Item
                  key={i}
                  nested={field.type === 'select' || field.type === 'textarea' ?
                    field.type : 'input'}
                  title={field.title}
                  nestedProps={{...field, placeholder: field.title + '...'}}
                >
                </List.Item>
              );
            })}

            <List.Item
              title="Switch"
              nested="switch"
              nestedProps={switchProps}
            />
          </List>
        </Group>

        <Group
          header="List with Icon"
          noPadded
        >
          <List>
            {fields.map((field, i) => {
              return (
                <List.Item
                  key={i}
                  media={<Icon name={field.icon} />}
                  nested={field.type === 'select' || field.type === 'textarea' ?
                    field.type : 'input'}
                  nestedProps={{...field, placeholder: field.title + '...'}}
                >
                </List.Item>
              );
            })}
          </List>
        </Group>

        <Group
          header="List with Label & Icon"
          noPadded
        >
          <List>
            {fields.map((field, i) => {
              return (
                <List.Item
                  key={i}
                  media={<Icon name={field.icon} />}
                  nested={field.type === 'select' || field.type === 'textarea' ?
                    field.type : 'input'}
                  title={field.title}
                  nestedProps={{...field, placeholder: field.title + '...'}}
                >
                </List.Item>
              );
            })}
          </List>
        </Group>

        <h3>Checkboxes & Radios</h3>

        <Group
          header="Checkboxes"
          footer="点击列表选择"
          noPadded
        >
          <List>
            {devices.map((device, i) => {
              return (
                <List.Item
                  nested="checkbox"
                  key={i}
                  title={device}
                  nestedProps={{name: 'checkbox-list-1'}}
                >
                </List.Item>
              );
            })}
          </List>
        </Group>

        <Group
          header="Radios"
          footer="点击选择一项"
          noPadded
        >
          <List>
            {devices.map((device, i) => {
              return (
                <List.Item
                  nested="radio"
                  key={i}
                  title={device}
                  nestedProps={{name: 'radio-list-1'}}
                >
                </List.Item>
              );
            })}
          </List>
        </Group>
      </Container>
    );
  }
});

export default FormExample;
