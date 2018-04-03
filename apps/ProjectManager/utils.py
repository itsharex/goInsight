# -*- coding:utf-8 -*-
# edit by fuzongfei
import pymysql
from django.http import HttpResponse
import socket
import json
from AuditSQL import settings

from ProjectManager.models import IncepMakeExecTask


def check_mysql_conn(user, host, password, port):
    try:
        conn = pymysql.connect(user=user, host=host, password=password,
                               port=port, use_unicode=True, connect_timeout=1)

        if conn:
            return {'status': 'INFO', 'msg': 'connect test is ok.'}
        conn.close()
    except pymysql.Error as err:
        return {'status': 'ERROR', 'msg': err}


def update_tasks_status(id=None, exec_result=None, exec_status=None):
    """
    更新任务进度
    更新备份信息
    """

    data = IncepMakeExecTask.objects.get(id=id)
    errlevel = [x['errlevel'] for x in exec_result] if exec_result is not None else []
    if 1 in errlevel or 2 in errlevel:
        if data.exec_status == '2':
            data.exec_status = 0
            data.save()
        elif data.exec_status == '3':
            data.exec_status = 1
            data.save()
    else:
        data.exec_status = exec_status

        if exec_status == 1:
            data.sequence = exec_result[1]['sequence']
            data.backup_dbname = exec_result[1]['backup_dbname']
            data.exec_log = exec_result
        data.save()


def check_incep_alive(fun):
    """检测inception进程是否运行"""

    def wapper(request, *args, **kwargs):
        inception_host = getattr(settings, 'INCEPTION_HOST')
        inception_port = getattr(settings, 'INCEPTION_PORT')

        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        result = sock.connect_ex((inception_host, inception_port))

        if 0 == result:
            return fun(request, *args, **kwargs)
        else:
            context = {'errCode': 400, 'errMsg': 'Inception服务无法抵达，请联系管理员'}
            return HttpResponse(json.dumps(context))

    return wapper
