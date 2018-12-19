import React, { Component } from 'react';
import Input from '../../../common/Inputs';
import Button from '../../../common/Button';
import { LanguageConsumer, LanguageProvider } from '../index';
import Select from '../../../HomePage/modal/JoinModal/JoinDetails/StageOne/Select';
import './style.css';

class LangaugePage extends Component {
  state = { };

  render() {
    return (
      <LanguageProvider>
        <LanguageConsumer>
          {context => (
            <div>
              <div>
                <h1 className="category__title">Enter category</h1>
                <div>
                  <Input
                    className="input__category"
                    placeholder="Enter category here..."
                    onChange={context.onChange}
                    type="text"
                    name="category"
                  />
                </div>
                <Input
                  className="input__category"
                  placeholder="Enter Image Category Url here..."
                  onChange={context.onChange}
                  type="text"
                  name="avatarUrl"
                />
                <Button
                  value="Add"
                  className="button__add-category"
                  onClick={context.addCategory}
                />
                {context.validationCategory ? (
                  <h1 className="Category__error">Please Enter Category / Image Category Url</h1>
                ) : (
                  <h1 className="Category__message">{context.messageCategory}</h1>
                )}
                <h1 className="langauge__title">Enter Language</h1>
                <Input
                  className="input__langauge"
                  placeholder="Enter langauge here..."
                  onChange={context.onChange}
                  type="text"
                  name="name"
                />
                <Button
                  value="Add"
                  className="button__add-language"
                  onClick={context.addLangauge}
                />
                {context.validationLangauge ? (
                  <h1 className="langauge__error">Please Enter langauge</h1>
                ) : (
                  <h1 className="langauge__message">{context.messageLanguage}</h1>
                )}
              </div>
              <div>
                <h1 className="langauge__title">Enter Dialects</h1>
                <div className="langauge__select">
                  <Select
                    name="Langauge"
                    data={context.languages}
                    getDialects={context.getDialects}
                  />
                </div>
                <Input
                  className="input__dialect"
                  placeholder="Enter dialects here..."
                  onChange={context.onChange}
                  type="text"
                  name="dialects"
                />
                <Button
                  value="Add"
                  className="button__add-dialect"
                  onClick={context.addDialects}
                />
                {context.validationDilactes ? (
                  <h1 className="dialect__error">
                  Please Enter Dialect /Select Your langauge
                  </h1>
                ) : (
                  <h1 className="dialect__message">{context.messageDialect}</h1>
                )}
              </div>
            </div>
          )}
        </LanguageConsumer>
      </LanguageProvider>

    );
  }
}

export default LangaugePage;
